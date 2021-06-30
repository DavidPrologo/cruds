import React from 'react';

import ToolBar from './components/tool-bar';
import Table from './components/Table/table';
import Title from './components/title';
import Thead from './components/Table/thead';
import Tbody from './components/Table/tbody';
import ModalSwitch from './components/Crud/modal-switch';

class Task extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            tasks: [],
            modal: {
                show: false,
                modo: '',
            }
        }
    }
    componentDidMount(){
        fetch('http://cruds.local/api/task')
        .then((response)=> response.json() )
        .then((tasks)=> this.setState({tasks:tasks}))
        .catch((erro)=>{console.log(erro)})

    }
    render() {
        const { tasks, modal } = this.state;

        const setVisible = (state)=>{
            this.setState({modal:{show:state}})
        }
        const setModal = (key)=>{
            modal.modo= key;
        }
        const openModal = (key, data)=>{
            setModal(key);
            setVisible(true)
        }
        return (
            <div className="container">
                <Title />
                <ToolBar parent={this} addAction={()=> openModal('create') } />
                <Table>
                    <Thead cols={[
                        'visto',
                        'desrição',
                        'data'
                    ]}/>
                    <Tbody>{
                    tasks.map( (e, k) =>
                        <Row data={task} methods={{
                            openModal: openModal
                        }} />
                    )}
                    </Tbody>
                    
                </Table>
                <ModalSwitch state={this.state.modal}/>
                {/* <Modal show={this.state.modal.show} handleClose={()=>{setVisible(false)}}>
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox area-label="olha"/>
                    </InputGroup.Prepend>
                    <br/>
                    <FormControl name="description"/>
                    <br/>
                    <FormControl name="date"/>
                </Modal> */}
            </div>
        )
    }
}
export default Task