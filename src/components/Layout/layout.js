import React, {Component} from 'react';
import Navbar from '../Navigation/Navbar/navbar';
import DonationModal from '../Modal/donationModal';

import './layout.css';

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"Zeynep",
      }
    }
    render() {
      return (
        <div>
          <div>
              <Navbar/>
          </div>     
          <main>
              {this.props.children}
          </main>
          <div className="donateModal">
              <DonationModal/>
          </div>
        </div>
      );
    }
  }
  
export default Layout;