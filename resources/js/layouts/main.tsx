import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import TaskPage from '../pages/TaskManegement';

export default function Main(){
    return (
    <main>
        <Switch> 
            <Route path="/web/home" component={Home}/>
            <Route path="/web/about" component={About}/>
            <Route path="/web/task" component={TaskPage}/>
        </Switch>
    </main>
    )
}