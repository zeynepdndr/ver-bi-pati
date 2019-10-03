import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/landing-page';
import Navbar from './components/navbar';

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
    return (
      <div>
          <Navbar/>
          <LandingPage/>
      </div>
      
    );
  }
}

export default App;