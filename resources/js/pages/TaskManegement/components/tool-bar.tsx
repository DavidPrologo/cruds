import React, { useState } from 'react';
import {Link} from 'react-router-dom';
interface Props {
    openCreateModal: () => void;
}
export default function ToolBar({openCreateModal}:Props){    // const [show, setShow] = useState(false);
    return (
        <div className="row">
            <div className="col-4">
                <input className="form-control" type="text"/>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <Link to="/web/task#create" className="btn" onClick={openCreateModal}>adicionar</Link>
            </div>
        </div>
    )
}