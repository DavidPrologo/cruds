import React, {useState, useEffect} from 'react';

import { DataGrid } from '@material-ui/data-grid';
import _ from 'lodash/fp';


import api        from '../../services/api';
import ToolBar    from './components/tool-bar';
import Title      from './components/title';

import SwitchModal      from './switch-modal';
import FormCreateDialog from './form-create-dialog';
import FormShowDialog   from './form-show-dialog';
import FormEditDialog   from './form-edit-dialog';
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
interface IModalDictinary{
    [key:string]: React.FC<IProps>;
}
const columns  = [
    {field: 'id'         , headerName: 'ID'       , width: 90 },
    {field: 'checked'    , headerName: 'CHECKED'  , width: 90 },
    {field: 'title'      , headerName: 'TITLE'    , width: 150},
    {field: 'description', headerName: 'DESCRIÇÃO', width: 150}
];
const Crud: IModalDictinary = {
    'create': FormCreateDialog,
    'show'  : FormShowDialog,
}
function applyFilter<Type, Key extends keyof Type>(query: string, column: Key, data: Type[]){
    console.log(data)
    return data.filter(
        (el, k) => (''+el[column]).toLowerCase()
            .indexOf(query.toLowerCase()) > -1
    )
}
export default function TaskManagement(){

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [query, setQuery] = useState<string>('');
    const [column, setColumn] = useState<string>('title');
    const [modalState, setModalState] = useState<IModalState>({
        open:false, data:{}, modo: '',
    });

    const openModal = (modo:string, data:any) => {
        setModalState({open:true, data:data, modo: modo});
    }
    const closeModal = () => {
        setModalState({ ...modalState, open:false }); 
    }    
    useEffect(()=>{
        api.get<ITask[]>('/task').then( response  => {
            setTasks(
                applyFilter<ITask, keyof ITask>(
                    query,
                    column as keyof ITask,
                    response.data
                )
            )
        })
    }, [modalState.open, query]);

    return (
        <div className="container" style={{height:'calc(100% - 100px)'}}>
            <Title>My task list</Title>
            <select onChange={e => setColumn(e.target.value)}>
                <option value='title'>title</option>
                <option value='description'>description</option>
            </select>
            <input onChange={e => setQuery(e.target.value)}/>
            <ToolBar openCreateModal={()=> openModal('create', [])}/>
            <DataGrid
                columns ={columns}
                rows    ={tasks}
                pageSize={5}
                onRowClick={(props, e)=>{openModal('show', props.row)}} />
            <SwitchModal
              open       ={modalState.open}
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