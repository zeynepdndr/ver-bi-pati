import React from "react";
import "./../Navbar/navbar.css";
import { Link } from "react-router-dom";

const NavigationItem = props => (
  <li className="nav-item">
    <Link to={props.link} className="nav-link">
      {props.children}
    </Link>
  </li>
);

export default NavigationItem;
