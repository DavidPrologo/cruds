import React from 'react';

import Button            from '@material-ui/core/Button';
import TextField         from '@material-ui/core/TextField';
import Dialog            from '@material-ui/core/Dialog';
import DialogActions     from '@material-ui/core/DialogActions';
import DialogContent     from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle       from '@material-ui/core/DialogTitle';

import api from '../../services/api';
import { SentimentSatisfiedAlt } from '@material-ui/icons';

interface IProps {
    handleClose: () => void;
    data       : any;
}

interface IData {
  [nome:string]: string;
}

interface IField {
  name : string;
  value: string;
}

export default function FormCreateDialog({ handleClose}:IProps) {
    const [data, setData] = React.useState<IData>({});
    const setField = ({name, value}:IField) => {
      data[name] = value
      setData(data);
    }

    const handleSubmit = ():void => {
      api.post('task', {data: data})
      .then((resp) => {console.log(resp)})
      .catch((error) => { console.log(error)})
    }
    return (
      <div>
        {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"> */}
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {data.nome}To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={e => setField(e.target as IField)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        {/* </Dialog> */}
      </div>
    );
  }