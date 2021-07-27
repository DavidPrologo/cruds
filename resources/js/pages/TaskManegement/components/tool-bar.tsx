import React, { useState } from 'react';
import {Link} from 'react-router-dom';
interface Props {
    btnAddHandle     : () => void;
    selectHandle     : (e:React.ChangeEvent<HTMLSelectElement>) => void;
    searchInputHandle: (e:React.ChangeEvent<HTMLInputElement> ) => void;
}
export default function ToolBar(props:Props){    // const [show, setShow] = useState(false);
    return (
        <div className="row">
            <div className="col-4">
                <select onChange={ props.selectHandle }>
                    <option value='title'>title</option>
                    <option value='description'>description</option>
                </select>
            </div>
            <div className="col-4">
                <input className="form-control" onChange={props.searchInputHandle} type="text"/>
            </div>
            <div className="col-4">
                <button className="btn" onClick={props.btnAddHandle}>adicionar</button>
            </div>
        </div>
    )
}