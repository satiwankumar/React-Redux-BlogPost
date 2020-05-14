import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom'
const Header =()=>{
    return(
        
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Satiwan kumar</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li> <Link to="/"><a href="sass.html">Home</a></Link></li>
                <li><Link to="/about"><a href="badges.html">About</a></Link></li>
                <li><Link to="Contact"><a href="collapsible.html">Contact</a></Link></li>
            </ul>
            </div>
        </nav>

           
    )
}
export default Header