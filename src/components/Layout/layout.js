import React, {Component} from 'react';
import Navbar from '../Navigation/Navbar/navbar';
import CustomModal from '../Shared/customModal';

import './layout.css';

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"Zeynep",
      }
    }

    render() {
      const { firebase } = this.props
      return (
        <div>
          <div>
              <Navbar firebase = {firebase}/>
          </div>     
          <main className="mainClass">
              {this.props.children}
          </main>
          <div className="donateModal">
              <CustomModal link = "/destekol" imgPath= {require('./../Res/images/donation4.jpeg')} id="donationModalImage"></CustomModal>
          </div>
          <div className="aboutusModal">
              <CustomModal link = "/nedenuyelik" imgPath={require('./../Res/images/ask.jpg')} id="aboutusModalImage"></CustomModal>
          </div>
        </div>
      );
    }
  }
  
export default Layout;