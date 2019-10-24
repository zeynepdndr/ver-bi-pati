import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './customModal.css';

const CustomModal = (props) =>{
    return (
        <Link to={props.link} className="link">
            <div className="modal-dialog">       
                <div className="modal-content">
                    <div className="modal-body">               
                        <img className="img-responsive" id={props.id} src={props.imgPath} alt=""/>                                     
                    </div>            
                </div>
            </div>
        </Link>
    );
};
export default CustomModal;