import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Modal as M, Button} from 'react-bootstrap';

import Create from '../Crud/create';

export default function Modal(){
    return (
        <M show={true}>
            <Switch>
                <Route path='/web/task/create'component={Create} />
            </Switch>
        </M>
);}
