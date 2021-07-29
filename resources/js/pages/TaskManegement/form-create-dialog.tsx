import React from 'react';

import Button            from '@material-ui/core/Button';
import TextField         from '@material-ui/core/TextField';
import DialogActions     from '@material-ui/core/DialogActions';
import DialogContent     from '@material-ui/core/DialogContent';
import DialogTitle       from '@material-ui/core/DialogTitle';

import api               from '../../services/api';
import setObjectField    from '../../services/models';

interface IProps {
    handleClose: () => void;
    data       : any;
}

interface IData {
  title      : number;
  description: number;
  date       : Date;
  checked?   :boolean;
}

interface IField {
  name : keyof IData;
  value: IData[keyof IData];
}

export default function FormCreateDialog({ handleClose}:IProps) {
    const [data, setData] = React.useState<IData>({} as IData);

    function setField(e: React.ChangeEvent<HTMLInputElement> ) {
      const {name, value} = e.target;
      setObjectField<IData, keyof IData>(data, name as keyof IData, value);
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
              onChange={ setField }
            />
            <TextField
              autoFocus
              margin="dense"
              label ="Description"
              type  ="text"
              name  = "description"
              fullWidth
              onChange={ setField }
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
              onChange={ setField }
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