
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

// import { BrowserRouter } from 'react-router-dom';
// import Header from './layouts/header';
// import Main from './layouts/main';
// import Footer from './layouts/footer';


ReactDom.render(
    <App />,
    document.getElementById('app')
) 