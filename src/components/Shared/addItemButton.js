import React, { Component } from "react";
import "./addItemButton.css";

const AddItemButton = props => {
  return (
    //TODO: Make button text dynamic with props
    <div className="add-box">
      <div className="row">
        <div className="center-block">
          <button id="addIconCentered" onClick={props.addActivity}>
            <i className="fa fa-plus-circle fa-lg" id="withButton"></i>
            <span>YENİ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemButton;
