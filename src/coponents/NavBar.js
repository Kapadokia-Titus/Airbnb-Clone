import logo from '../images/airbnblogo.png';
import React from "react";
import "../styles.css"
function Navbar(){

    return(
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}

export default Navbar;