import React, { Component } from "react";
import "./addItemButton.css";

const AddItemButton = props => {
  return (
    <div className="add-box">
      <div className="row">
        <div className="center-block">
          <button
            id="addIconCentered"
            onClick={props.addActivity}
            style={props.style === undefined ? {} : props.style}
          >
            <i
              className="fa fa-plus-circle fa-lg"
              id={props.style === undefined && "withButton"}
            ></i>
            <span>{props.text === undefined ? "YENİ" : props.text}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemButton;
