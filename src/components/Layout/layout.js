import React, { Component } from "react";
import Navbar from "../Navigation/Navbar/navbar";
import CustomFrame from "../Shared/customFrame";

import "./layout.css";

class Layout extends Component {
  render() {
    const { firebase } = this.props;
    return (
      <div>
        <div>
          <Navbar firebase={firebase} />
        </div>
        <main className="mainClass">{this.props.children}</main>
        <div className="donateModal">
          <CustomFrame
            link="/destekol"
            title="DESTEK OL"
            icon="fa fa-heartbeat"
          ></CustomFrame>
        </div>
        <div className="aboutusModal">
          <CustomFrame
            link="/nedenuyelik"
            title="BİZ KİMİZ"
            icon="fa fa-question"
          ></CustomFrame>
        </div>
      </div>
    );
  }
}

export default Layout;
