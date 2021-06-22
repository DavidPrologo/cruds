import React from 'react';

export default function Row({item}){
    return (
        <tr>
            <td>
                <input type="checkbox" checked={item.checked}/>
            </td>
            <td>{item.discription}</td>
            <td>{item.date}</td>
        </tr>
    )
}