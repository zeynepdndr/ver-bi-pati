import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './customFrame.css';

const CustomFrame = (props) =>{
    return (
        <Link to={props.link} className="link">
            <div className="solid">       
                    <div ><span><i class={props.icon}></i></span>{props.title}</div>
                    {/* <div className="modal-body">               
                        <img className="img-responsive" id={props.id} src={props.imgPath} alt=""/>                                     
                    </div>             */}
            </div>
        </Link>
    );
};
export default CustomFrame;