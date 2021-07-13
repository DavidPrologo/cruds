import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import Title from './components/title';
// import ToolBar from './components/tool-bar';
// import Modal from './components/Modal'
// import Task from './task';
// import Header from './header';

interface ITask{
    date       : Date;
    discription: string;
    state      : boolean;
}

function TaskManagement(): React.ReactElement {

    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(()=>{
        api.get<ITask[]>('/task').then( response  => {
            setTasks(response.data);
        })
    }, []);

    return (
        <div className="container">
            <Title>My task list</Title>
            {/* <ToolBar />
            <Header columns={{
                date       : "Data",
                discription: "descrição",
                state      : 'visto'
            }}/>
            {tasks.map( task => <Task task={task} /> )}   */}
            {/* <Modal /> */}
        </div>
    )
}
export default TaskManagement;