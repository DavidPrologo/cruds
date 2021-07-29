import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

export default function Alert({handleClose}:any){
    const [alertState, setAlertState] = React.useState(false);
    return (
        <Snackbar open={alertState} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert onClose={handleClose} severity="success">
                This is a success message!
            </MuiAlert>
        </Snackbar>
    )
}