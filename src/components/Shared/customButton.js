import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./customButton.css";

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Zeynep",
      clickMeText: "Welcome",
      buttonState: true
    };
  }

  handleClick = () => {
    const { onClick } = this.props;
    if (this.props.link === undefined) {
      if (onClick !== undefined) {
        onClick();
      }
    } else {
      this.props.history.push(this.props.link);
    }
  };

  render() {
    return (
      <button
        className="btn btn-default filter-button"
        id="newButton"
        data-filter="all"
        onClick={this.handleClick}
      >
        {this.props.label}
      </button>
    );
  }
}
export default CustomButton;
