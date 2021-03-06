/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header';
// import Main from './layouts/main';
import Footer from './layouts/footer';
import Routes from './routes';

export default function App(){
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes/>
            </main>
            <Footer />            
        </BrowserRouter>
    )
}
