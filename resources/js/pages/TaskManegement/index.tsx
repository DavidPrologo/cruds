import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';

import api from '../../services/api';

import ToolBar    from './components/tool-bar';
import Title      from './components/title';

import Create     from './components/Crud/create';
import Edit       from './components/Crud/edit';
import Show       from './components/Crud/show';

import Task       from './task';
import Header     from './header';
import { Switch } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

interface ITask{
    date       : Date;
    discription: string;
    state      : boolean;
}

const crudModais = {
    edit  : <h1>edit</h1>,
    create: <h1>create</h1>,
    show  : <h1>show</h1>,
}

export default function TaskManagement(){

    const [tasks, setTasks] = useState<ITask[]>([]);

    const getModalComponent:React.FC = () => {
        const Component = crudModais['edit'];
        return Component
    }

    useEffect(()=>{
        api.get<ITask[]>('/task').then( response  => {
            setTasks(response.data);
        })
    }, []);

    // const modal = { render: (state:any) => {
    //     const renders: object = {};
    //     <Modal show={state.show}>
    //         {renders[state.name]}
    //     </Modal>
    // }}

    return (
        <div className="container">
            <Title>My task list</Title>
            <ToolBar openCreateModal={()=> alert('ola')}/>
            <Header columns={{
                date       : "Data",
                discription: "descrição",
                state      : 'visto'
            }}/>
            {tasks.map( task =>
                <Task task={task} /> )}  
            <Modal>
                {}
            </Modal>
        </div>
    )
}
// export default TaskManagement;