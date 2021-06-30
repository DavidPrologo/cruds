import React, { useState } from 'react';
// import Modal from './Modal';

export default function ToolBar({ addAction }){
    // const [show, setShow] = useState(false);
    return (
        <div className="row">
            <div className="col-4">
                <input className="form-control" type="text"/>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <button onClick={ addAction } className="btn">adicionar</button>
            </div>
        </div>
    )
}