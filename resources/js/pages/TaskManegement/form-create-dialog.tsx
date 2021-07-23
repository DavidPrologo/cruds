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
import { gridColumnsTotalWidthSelector } from '@material-ui/data-grid';

interface IProps {
    handleClose: () => void;
    data       : any;
}

interface IData {
  title      : string;
  description: string;
  date       : Date;
  checked?   :boolean;
}

interface IField {
  name : keyof IData;
  value: IData[keyof IData];
}
function setObject<Type, Key extends keyof Type>
(object:Type, key:Key, value:Type[Key]): void{
  object[key] = value;
}
export default function FormCreateDialog({ handleClose}:IProps) {
    const [data, setData] = React.useState<IData>({} as IData);
    const setField = (key:any, value:any) => {
      setObject<IData, keyof IData>(data, key, value);
      setData(data);
    }

    function handleCadastrar ():void {
      api.post('task', data)
      .then ((resp)  => {
        alert(resp);
        handleClose();
      })
      .catch((error) => { console.log(error)})
    }
    return (
      <div>
          <DialogTitle id="form-dialog-title">Cadastrar</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label ="Title"
              type  ="text"
              name  = "title"
              fullWidth
              onChange={e => setField(e.target.name, e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label ="Description"
              type  ="text"
              name  = "description"
              fullWidth
              onChange={e => setField(e.target.name, e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label ="Date"
              type="date"
              name  = "date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              onChange={e => setField(e.target.name, e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCadastrar} color="primary">
              Cadastrar
            </Button>
          </DialogActions>
      </div>
    );
  }