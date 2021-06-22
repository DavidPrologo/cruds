import React from 'react';

import ToolBar from './components/tool-bar';
import Table from './components/table';
import Title from './components/title';
import Thead from './components/thead';
import Tbody from './components/tbody';

class Task extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            tasks: []
        }
    }
    componentDidMount(){
        fetch('http://cruds.local/api/task')
        .then((response)=> response.json() )
        .then((tasks)=> this.setState({tasks:tasks}))
        .catch((erro)=>{console.log(erro)})

    }
    render() {
        const { tasks } = this.state
        return (
            <div className="container">
                <Title />
                <ToolBar parent={this}/>
                <Table>
                    <Thead cols={[
                        'visto',
                        'desrição',
                        'data'
                    ]}/>
                    <Tbody rows={tasks} />
                </Table>
            </div>
        )
    }
}
export default Task