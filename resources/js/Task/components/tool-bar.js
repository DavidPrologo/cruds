import React from 'react';

export default function ToolBar(){
    return (
        <div className="row">
            <div className="col-4">
                <input className="form-control" type="text"/>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <button className="btn">adicionar</button>
                <button className="btn">apagar</button>
            </div>
        </div>
    )
}