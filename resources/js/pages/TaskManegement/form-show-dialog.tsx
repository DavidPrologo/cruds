import React from 'react';

import {Dialog, DialogActions, DialogTitle} from '@material-ui/core';
import Button from '@material-ui/core/Button';

interface IProps {
    handleClose: ()=>void;
    data       : any;
}

export default function FormShowDialog({handleClose, data}:IProps){
    const handleSubmit = () => {
        alert('show')
    }
    return (
        <div>
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <h1>{data.description}</h1>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Editar
                </Button>
            </DialogActions>
        </div>
    )
}