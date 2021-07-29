import React, {useState, useEffect} from 'react';

import { DataGrid } from '@material-ui/data-grid';
// import _ from 'lodash/fp';


import api        from '../../services/api';
import ToolBar    from './components/tool-bar';
import Title      from './components/title';

import SwitchModal      from './components/switch-modal';
import FormCreateDialog from './form-create-dialog';
import FormShowDialog   from './form-show-dialog';
import FormEditDialog   from './form-edit-dialog';
import setObjectField from '../../services/models';
interface ITask{
    date       : Date;
    discription: string;
    state      : boolean;
}
interface IModalState{
    open: boolean;
    data: any;
    modo: string;
}

interface IProps{
    handleClose: ()=> void;
    data: any;
}
const columns  = [
    {field: 'id'         , headerName: 'ID'       , width: 90 },
    {field: 'checked'    , headerName: 'CHECKED'  , width: 90 },
    {field: 'title'      , headerName: 'TITLE'    , width: 150},
    {field: 'description', headerName: 'DESCRIÇÃO', width: 150}
];
function applyFilter<Type, Key extends keyof Type>(query: string, column: Key, data: Type[]){
    console.log(data)
    return data.filter(
        (el, k) => (''+el[column]).toLowerCase()
            .indexOf(query.toLowerCase()) > -1
    )
}
export default function TaskManagement(){
    const defaultColumnValue                = 'title'
    const [tasks, setTasks]                 = useState<ITask[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
    const [filterState, setFilterState]     = useState({column:defaultColumnValue, query:''})
    const [modalState, setModalState]       = useState<IModalState>({
        open:false, data:{}, modo: '',
    });
    function setFilter(key:string, value:string) {
        setObjectField<Object, keyof Object>(filterState, key as keyof Object, value);
        filterTasks(tasks);
    }
    function filterTasks(tasks:ITask[]){
        setFilteredTasks( applyFilter<ITask, keyof ITask>(
            filterState.query,
            filterState.column as keyof ITask,
            tasks)
        )
    }
    const openModal = (modo:string, data:any) => {
        setModalState({open:true, data:data, modo: modo});
    }
    const closeModal = () => {
        setModalState({ ...modalState, open:false }); 
    }    
    useEffect(()=>{
        api.get<ITask[]>('/task').then( response  => {
            setTasks(response.data)
            filterTasks(response.data)
        })
    }, [modalState.open]);

    return (
        <div className="container" style={{height:'calc(100% - 100px)'}}>
            <Title>My task list</Title>
            <ToolBar
              filterColumns   = {[
                {value: 'title'       , label:'Title'},
                {value: 'description' , label:'Description'}
              ]}
              selectHandle     = { e => setFilter('column', e.target.value)}
              searchInputHandle= { e => setFilter('query', e.target.value)}
              btnAddHandle     = {()=> openModal('create', [])}
              />
            <DataGrid
                columns ={columns}
                rows    ={filteredTasks}
                pageSize={5}
                onRowClick={(props, e)=>{openModal('show', props.row)}} />
            <SwitchModal
              aria-labelledby="customized-dialog-title"
              open       ={modalState.open}
              handleOpen ={openModal}
              handleClose={closeModal}
              modo       ={modalState.modo}
              data       ={modalState.data} 
              modais     ={{
                create: FormCreateDialog,
                edit  : FormEditDialog,
                show  : FormShowDialog
            }}/>
        </div>
    )
}
// export default TaskManagement;