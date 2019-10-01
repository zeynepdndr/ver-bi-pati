import React, {Component} from 'react';
import './App.css';
import MyButton from "./Button"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"Zeynep",
      clickMeText:"Welcome",
      buttonState: true,
    }
  }

  clickhandler = () => {
    const {text, clickMeText} = this.props;
    this.setState({
      clickMeText: this.state.buttonState ? "Goodbye" : "Welcome",
      buttonState: !this.state.buttonState,
    });
    console.log("ButtonState:", this.state.buttonState);
  }

  render() {
    console.log("render call!")
    return (
      <div>
        <div class="container">{this.state.text}</div>
        <MyButton clr="red" />
      </div>
      
    );
  }
}

export default App;