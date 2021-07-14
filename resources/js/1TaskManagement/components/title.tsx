import React from 'react';

interface Props{
    children: string;
}

export default function Title({children}:Props){
    return(
        <div>
            <h1>{children}</h1>
        </div>
    )
}