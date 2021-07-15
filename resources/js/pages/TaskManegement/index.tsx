import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import { DataGrid } from '@material-ui/data-grid';
import {Dialog} from '@material-ui/core';

import api from '../../services/api';

import ToolBar    from './components/tool-bar';
import Title      from './components/title';

import FormCreateDialog from './form-create-dialog';
import FormShowDialog from './form-show-dialog';
interface ITask{
    date       : Date;
    discription: string;
    state      : boolean;
}
interface IModalState{
    open: boolean;
    data: any;
    current: string;
}

interface IProps{
    handleClose: ()=> void;
    data: any;
}
interface IModalDictinary{
    // [key:string]:React.ReactElement;
    [key:string]: React.FC<IProps>;
}
const columns  = [
    {field: 'id'         , headerName: 'ID'      ,  width: 90},
    {field: 'description', headerName: 'DESCRIÇÃO', width: 150 }
];

export default function TaskManagement(){

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [modalState, setModalState] = useState<IModalState>({
        open:false, data:{}, current: '',
    });

    const openModal = (modo:string, data:any) => {
        setModalState({open:true, data:data, current: modo});
    }
    const closeModal = () => {
        const current = modalState.current
        setModalState({open:false, current: current, data: []});
        // setModal(modo, [], false)     
    }
    const Crud: IModalDictinary = {
        'create': FormCreateDialog,
        'show'  : FormShowDialog,
    }
    const SwitchDialog = function({modo, handleClose}:any){
        return Crud[modo]({handleClose:handleClose, data:[]})
    }
    
    useEffect(()=>{
        api.get<ITask[]>('/task').then( response  => {
            setTasks(response.data);
        })
    }, []);

    return (
        <div className="container" style={{height:'calc(100% - 100px)'}}>
            <Title>My task list</Title>
            <ToolBar openCreateModal={()=> openModal('create', [])}/>
            <DataGrid
                columns ={columns}
                rows    ={tasks}
                pageSize={5}
                onRowClick={(props, e)=>{openModal('show', props.row)}} />
            <Dialog open={modalState.open}>
                <SwitchDialog handleClose={closeModal} modo={modalState.current}/>
            </Dialog>
            {/* <FormCreateDialog
                open={modalState['create'].open}
                handleClose={()=> closeModal('create')} />
            <FormShowDialog
                open={modalState['show'].open}
                handleClose={()=> closeModal('show')}
                data={modalState['show'].data}/> */}
            {/* <FormEditDialog /> */}

        </div>
    )
}
// export default TaskManagement;