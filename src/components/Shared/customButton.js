import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './customButton.css';

class CustomButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"Zeynep",
        clickMeText:"Welcome",
        buttonState: true,
      }
    }
  
    handleClick = () => {
      if (this.props.link === undefined) {
        //TODO: click logic this.props.onClick()
        console.log(this.props)
      } else {
        this.props.history.push(this.props.link);
      }
    }
  
    render() {
      return (
        <button
        className="btn btn-default filter-button"
        id="newButton"
        data-filter="all"
        onClick={this.handleClick}>
        {this.props.label}
        </button>
      );
    }
};
export default CustomButton;