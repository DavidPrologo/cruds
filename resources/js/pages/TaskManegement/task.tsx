import React from 'react';

interface ITask{
    date       : Date;
    discription: string;
    state      : boolean;
}
interface Props{
    task: ITask;
}

function Task({task}:Props): React.ReactElement{
    return(
        <div className="row">
            <div className="col-4">{task.date}</div>
            <div className="col-4">{task.discription}</div>
            <div className="col-4">{task.state}</div>
        </div>
    )
}

export default Task;