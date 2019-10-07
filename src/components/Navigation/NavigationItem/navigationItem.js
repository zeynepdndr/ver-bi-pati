import React, {Component} from 'react';
import './../Navbar/navbar.css';

const NavigationItem = (props)=>(
    <li className="nav-item">
    <a 
        href={props.link}
        className="nav-link" >{props.children}</a>
  </li>
)

export default NavigationItem;