import React from 'react';

import { DialogActions, DialogTitle, DialogContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';

interface IProps {
    handleClose: ()=>void;
    handleOpen : (modo:string, data:[])=>void;
    data       : any;
}

export default function FormShowDialog(props:IProps){
    const handleSubmit = () => {
        props.handleOpen('edit', props.data);
    }
    return (
        <div>
            <DialogTitle id="form-dialog-title">Task Detail</DialogTitle>
            <DialogContent dividers>
                <h1>{props.data.description}</h1>
            </DialogContent>
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