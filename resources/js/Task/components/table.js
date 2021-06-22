import React from 'react';

export default function Table({children}){
    return (
        <table className="table table-sm">{
            children
        }</table>
    )
}