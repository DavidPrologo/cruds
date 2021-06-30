import React from 'react';
import {Modal} from 'react-bootstrap';

const selector = {
    create: require('./create.js'),
    show  : require('./show.js'),
    edit  : require('./edit.js'),
}

export default function ModalSwitch(props){
    const Face = selector[props.modo]
    return (
        <Modal show={props.show}>
            <Face {...props} />
        </Modal>
)}