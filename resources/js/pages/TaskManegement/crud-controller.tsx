import React from 'react';


interface IModalState {
    current: string;
    renders: any;
}

export default function CrudController
( {current, renders}:IModalState ){
    return renders[current]
}