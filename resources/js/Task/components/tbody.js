import React, { useEffect } from "react";
import Row from './row.js';

export default function Tbody({rows}){
    useEffect(()=>
        console.log(['sdf',rows])
    )
    return (
        <tbody>{
            rows.map(row => <Row item={row} />)
        }
        </tbody>
    )
}