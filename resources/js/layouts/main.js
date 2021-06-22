import React from 'react';
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Task from '../Task';

export default function Main(){
    return (
    <main>
        <Switch>
            <Route path="/ui/home" component={Home}/>
            <Route path="/ui/about" component={About}/>
            <Route path="/ui/task" component={Task}/>
        </Switch>
    </main>
    )
}