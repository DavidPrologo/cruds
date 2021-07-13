import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import TaskPage from './pages/TaskManegement/';
import About from './About';

export default function Routes() {
    return(
        <Switch> 
            <Route exact={true} path="/web/home" children={Home}/>
            <Route exact={true}  path="/web/about" children={About}/>
            <Route exact={true}  path="/web/task" children={TaskPage}/>
        </Switch>
    )
}