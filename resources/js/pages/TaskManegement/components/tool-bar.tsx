import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    searchIcon:{
      paddingLeft          : '5px',
      height        : '100%',
      position      : 'absolute',
      pointerEvents : 'none',
      display       : 'flex',
      alignItems    : 'center',
      justifyContent: 'center',
    },
    searchInput:{
      paddingLeft: '30px',
    }
}
interface IColumn{
    value:string;
    label:string;
}
interface Props {
    filterColumns    : Array<IColumn>;
    btnAddHandle     : () => void;
    selectHandle     : (e:React.ChangeEvent<HTMLSelectElement>) => void;
    searchInputHandle: (e:React.ChangeEvent<HTMLInputElement> ) => void;
}
export default function ToolBar(props:Props){
    return (
        <div className="row" style={{paddingBottom:'10px'}}>
            <div className="col-2">
                <select onChange={ props.selectHandle } className='form-control'>
                    {props.filterColumns.map( e => (
                        <option value={e.value}>{e.label}</option>
                    ))}
                </select>
            </div>
            <div className="col-4">
                <div style={styles.searchIcon}>
                    <SearchIcon/>
                </div>
                <input
                  style={styles.searchInput}
                  placeholder="Search..."
                  className  ="form-control"
                  onChange   ={props.searchInputHandle}
                  type       ="text"/>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={props.btnAddHandle}>adicionar</button>
            </div>
        </div>
    )
}