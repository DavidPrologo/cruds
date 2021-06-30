import React from 'react';

const getCheckState = (item)=>{
    if(item.marked === undefined){
        item.marked = item.checked
    }
}

export default function Row({item, methods:{openModal}}){
    // checkState = getCheckState(item.marked);
    return (
        <tr onClick={()=> openModal({
            item: item,
            modo: 'edit' 
            })}>
            <td>
                <input type="checkbox" checked={item.checked}/>
            </td>
            <td>{item.discription}</td>
            <td>{item.date}</td>
        </tr>
    )
}