import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import TaskPage from './pages/TaskManegement/index';
import About from './About';

export default function Routes() {
    return(
        <Switch>
            <Route exact={true} path="/web/home"  component={Home}/>
            <Route exact={true} path="/web/about" component={About}/>
            <Route exact={true} path="/web/task"  component={TaskPage}/>
        </Switch>
    )
}