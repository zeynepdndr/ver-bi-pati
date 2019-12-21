import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/routes";

import Layout from "./components/Layout/layout";
import HomePage from "./components/Tabs/homepage";
import LandingPage from "./components/LandingPage/landing-page";
import Contact from "./components/Tabs/contact";
import Activities from "./components/Tabs/activities";
import Projects from "./components/Tabs/projects";
import Donation from "./components/Tabs/donation";
import Gallery from "./components/Tabs/gallery";
import Announcements from "./components/Tabs/announcements";
import Feeding from "./components/Tabs/feeding";
import Notification from "./components/Tabs/notification";

import { withFirebase } from "./components/Firebase";

const LayoutFire = withFirebase(Layout);

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.LANDING} render={() => <LandingPage />} />
          <Route
            path={ROUTES.LANDING}
            render={props => <LayoutFire {...props} />}
          />
        </Switch>
        <Route path={ROUTES.HOME} render={props => <HomePage {...props} />} />
        <Route path={ROUTES.CONTACT} render={props => <Contact {...props} />} />
        <Route
          path={ROUTES.ACTIVITIES}
          render={props => <Activities {...props} />}
        />
        <Route
          path={ROUTES.PROJECTS}
          render={props => <Projects {...props} />}
        />
        <Route
          path={ROUTES.DONATION}
          render={props => <Donation {...props} />}
        />
        <Route path={ROUTES.GALLERY} render={props => <Gallery {...props} />} />
        <Route
          path={ROUTES.ANNOUNCEMENTS}
          render={props => <Announcements {...props} />}
        />
        <Route path={ROUTES.FEEDING} render={props => <Feeding {...props} />} />
        <Route
          path={ROUTES.NOTIFICATION}
          render={props => <Notification {...props} />}
        />
      </div>  
    );
  }
}
