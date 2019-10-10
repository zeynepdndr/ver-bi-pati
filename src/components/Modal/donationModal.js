import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './donationModal.css';

class DonationModal extends Component {
    render() {
      return (
        <Link to="/destekol" className="link">
            <div className="modal-dialog">       
                <div className="modal-content">
                    <div className="modal-body">               
                        <img className="img-responsive" id="donationModalmage" src={require('./../Res/images/donation4.jpeg')} alt=""/>                   
                    </div>            
                </div>
            </div>
        </Link>
        )
    }
  }

export default DonationModal;