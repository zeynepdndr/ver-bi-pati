import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Notification from './components/Tabs/notification';

import { withFirebase } from "./components/Firebase"

const LayoutFire = withFirebase(Layout)

export default class App extends Component {
  render() {
    return (
      <div>  
        <Switch> 
          <Route exact path={ROUTES.LANDING} component={ LandingPage } />
          <LayoutFire>
            <Route path={ROUTES.HOME} component={ HomePage } />
            <Route path={ROUTES.CONTACT} component={ Contact } />
            <Route path={ROUTES.ACTIVITIES} component={ Activities } />
            <Route path={ROUTES.PROJECTS} component={ Projects} />
            <Route path={ROUTES.DONATION} component={ Donation } />
            <Route path={ROUTES.GALLERY} component={ Gallery } />
            <Route path={ROUTES.ANNOUNCEMENTS} component={ Announcements } />
            <Route path={ROUTES.FEEDING} component={ Feeding } />
            <Route path={ROUTES.ABOUTUS} component={ AboutUs } />
            <Route path={ROUTES.NOTIFICATION} component={ Notification } />
          </LayoutFire> 
        </Switch>}
          
      </div>
    );
  }
}
