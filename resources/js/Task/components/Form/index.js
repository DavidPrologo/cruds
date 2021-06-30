import React, { useRef } from 'react';
import {Form} from '@unform/web';
import {Scope} from '@unform/core';
//import './App.css';

import Input from './input.js';

const initialData = {
    email:'xuxu@meu.xuxu'
}

export default function FormCreate(){
    const formRef = useRef(null);
    function handleSubmit(data){
        if(data.name === ''){
            formRef.current.setFieldError('name', 'O nome é obrigatório');
        }

        console.log(data);
    }
    return(
        <div className="App">
            <h1>Hello world</h1>
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
                <Input name="name"/>
                <Input type="email" name="email"/>

                <Scope path="address">
                    <Input name="street"/>
                    <Input name="number" />
                    <Input name="city" />
                    <Input name="state" />
                    <Input name="number" />
                </Scope>
                

                <button type="submit">Enviar</button>
            </Form>
        </div>
    )
}