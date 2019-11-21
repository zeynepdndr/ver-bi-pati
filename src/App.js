import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/routes';

import Layout from './components/Layout/layout';
import HomePage from './components/Tabs/homepage'
import LandingPage from './components/LandingPage/landing-page';
import Contact from './components/Tabs/contact';
import Activities from './components/Tabs/activities';
import Projects from './components/Tabs/projects';
import Donation from './components/Tabs/donation';
import Gallery from './components/Tabs/gallery';
import Announcements from './components/Tabs/announcements';
import Feeding from './components/Tabs/feeding';
import AboutUs from './components/Tabs/aboutus';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import firebaseConfig from './firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();



/** See the signature above to find out the available providers */
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
/** providers can be customised as per the Firebase documentation on auth providers **/
providers.googleProvider.setCustomParameters({hd:"mycompany.com"});


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
    const location = window.location.pathname;
    return (
      <div>
          <Route exact path={ROUTES.LANDING} component={ LandingPage } />
          {location === "/" ? <div></div> 
          : 
          <Layout>
            <Route path={ROUTES.HOME} component={ HomePage } />
            <Route path={ROUTES.CONTACT} component={ Contact } />
            <Route path={ROUTES.ACTIVITIES} component={ Activities } />
            <Route path={ROUTES.PROJECTS} component={ Projects} />
            <Route path={ROUTES.DONATION} component={ Donation } />
            <Route path={ROUTES.GALLERY} component={ Gallery } />
            <Route path={ROUTES.ANNOUNCEMENTS} component={ Announcements } />
            <Route path={ROUTES.FEEDING} component={ Feeding } />
            <Route path={ROUTES.ABOUTUS} component={ AboutUs } />
          </Layout> }
          
      </div>
      
    );
  }
}

/** Wrap it */
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

