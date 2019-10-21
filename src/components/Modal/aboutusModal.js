import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './aboutusModal.css';

class AboutUsModal extends Component {
    render() {
      return (
        <Link to="/nedenuyelik" className="link">
            <div className="modal-dialog">       
                <div className="modal-content">
                    <div className="modal-body">               
                        <img className="img-responsive" id="aboutusModalmage" src={require('./../Res/images/ask.png')} alt=""/>                   
                    </div>            
                </div>
            </div>
        </Link>
        )
    }
  }

export default AboutUsModal;