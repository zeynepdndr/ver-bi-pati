import React, {Component} from 'react';
import Navbar from '../Navigation/Navbar/navbar';

// Daha sonra kaldir
import Gallery from '../Tabs/gallery'
import Contact from '../Tabs/contact'
//

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
        </div>
      );
    }
  }
  
export default Layout;