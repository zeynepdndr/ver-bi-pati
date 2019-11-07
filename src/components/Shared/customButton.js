import React, {Component} from 'react';
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
      const {text, clickMeText} = this.props;
      this.setState({
        clickMeText: this.state.buttonState ? "Goodbye" : "Welcome",
        buttonState: !this.state.buttonState,
      });
      console.log("ButtonState:", this.state.buttonState);
    }
  
    render() {
      return (
        <button
        className="btn btn-default filter-button"
        id="newButton"
        data-filter="all"
        onClick={this.props.handleClick}>{this.props.label}</button>
      );
    }
};
export default CustomButton;