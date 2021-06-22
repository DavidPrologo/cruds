import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to="/ui/home" >home</Link>
            <Link to="/ui/about" >about</Link>
            <Link to="/ui/task" >task</Link>
        </header>
    )
}