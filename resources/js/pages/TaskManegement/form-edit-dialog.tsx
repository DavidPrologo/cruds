import React from 'react';

import TextField         from '@material-ui/core/TextField';
import { DialogActions, DialogTitle} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import api from '../../services/api';

interface IProps {
    handleClose: ()=>void;
    handleOpen : (modo:string, data:[])=>void;
    data       : any;
}

function FormEditDialog(props:IProps){
    function handleSubmit(){
        api.put(`task/${props.data.id}`)
            .then(res => {
                alert('suesso')
            })
            .catch(error => {
                alert(error)
            })
    }
    return(
        <div>
            <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
                <TextField
                    autoFocus
                    margin="dense"
                    label ="Title"
                    type  ="text"
                    name  = "title"
                    fullWidth
                    defaultValue={props.data.title}
                // onChange={ setField }
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label ="Description"
                    type  ="text"
                    name  = "description"
                    fullWidth
                    defaultValue={props.data.description}
                // onChange={ setField }
                />
                <input
                    type          = 'checkbox'
                    defaultChecked={props.data.checked}
                    name          = 'checked'
                />
                <label htmlFor="">relisied</label>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Editar
                </Button>
            </DialogActions>
        </div>
    )
}
export default FormEditDialog;