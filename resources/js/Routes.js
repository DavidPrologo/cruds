import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    IndexRoute,
    Link,
} from 'react-router-dom';

import Home from './Home';
import Task from './Task';
import About from './About';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact={true} path="/ui/home" children={Home}/>
                <Route exact={true}  path="/ui/about" children={About}/>
                <Route exact={true}  path="/ui/task" children={Task}/>
            </Switch>
        </Router>
    )
}