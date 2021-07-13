import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to="/web/home" >home</Link>
            <Link to="/web/about" >about</Link>
            <Link to="/web/task" >task</Link>
        </header>
    )
}