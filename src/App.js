import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout/layout';
import HomePage from './components/Tabs/homepage'
import LandingPage from './components/LandingPage/landing-page'
import Contact from './components/Tabs/contact';


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
          <Layout>
            {/* <Route path="/" component={ LandingPage } /> */}
            <Route path="/" component={ HomePage } />
            {/* <Route path="/" component={ Contact } /> */}
          </Layout>
      </div>
      
    );
  }
}

export default App;