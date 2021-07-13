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
import TaskManagement from './Task';
import About from './About';

export default function Routes() {
    return(
        <Router>
            <Switch> 
                {/* <Route exact={true} path="/web/home" children={Home}/> */}
                {/* <Route exact={true}  path="/web/about" children={About}/> */}
                <Route exact={true}  path="/web/task" children={TaskManagement}/>
            </Switch>
        </Router>
    )
}