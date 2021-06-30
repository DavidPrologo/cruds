import React from 'react';

export default function Table({tasks, render}){
    return (
        <table className="table table-sm">{
            tasks.map((e, k)=> render(e, k))
        }</table>
    )
}