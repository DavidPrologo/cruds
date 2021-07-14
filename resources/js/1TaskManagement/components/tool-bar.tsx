import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import Modal from './Modal';

export default function ToolBar(){    // const [show, setShow] = useState(false);
    return (
        <div className="row">
            <div className="col-4">
                <input className="form-control" type="text"/>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <Link to="/web/api" className="btn">adicionar</Link>
            </div>
        </div>
    )
}