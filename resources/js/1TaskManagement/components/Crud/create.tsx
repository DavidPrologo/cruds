import React from 'react';
import {Modal as M, Button} from 'react-bootstrap';

export default function Create()
{
    return (
    <div>
        <M.Header>
            <M.Title>Cadastrar Tarefa</M.Title>
        </M.Header>

        <M.Body>
            {"children"}
        </M.Body>

        <M.Footer>
            <Button variant="secondery" onClick={()=>{"handleClose"}}>Close</Button>
            <Button variant="primary">Save changes</Button>
        </M.Footer>
    </div>)
}