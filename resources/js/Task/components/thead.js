import React from "react";

export default function Thead({cols: [check, discription, date]}){
    return (
        <thead>
            <tr>
                <th scope="col">{check}</th>
                <th scope="col">{discription}</th>
                <th scope="col">{date}</th>
            </tr>
        </thead>
    )
}