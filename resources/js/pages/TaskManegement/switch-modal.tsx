import React from 'react';

import {Dialog} from '@material-ui/core';

function SwitchModal(props:any){
    const modais = props.modais
    return (
        <Dialog {...props}>
            {props.modo !== ''? (modais[props.modo] (props)): ''}
        </Dialog>
    )
}
export default SwitchModal;