import React from "react";
import { useHistory } from "react-router-dom";
import "./customButton.css";

const CustomButton = props => {
  let history = useHistory();
  const handleClick = () => {
    const { onClick } = props;
    if (props.link === undefined) {
      if (onClick !== undefined) {
        onClick();
      }
    } else {
      history.push(props.link);
    }
  };

  return (
    <button
      className="btn btn-default filter-button"
      id="newButton"
      data-filter="all"
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
};
export default CustomButton;
