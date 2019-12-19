import React from "react";
import "./navigationItem.css";
import { Link } from "react-router-dom";

const NavigationItem = props => (
  <li>
    <Link className="navbar-item" to={props.link}>
      {props.children}
    </Link>
  </li>
);

export default NavigationItem;
