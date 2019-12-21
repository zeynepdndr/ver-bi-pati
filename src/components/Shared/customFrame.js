import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import ModalWhoWe from '../Common/modalWhoWe';
import './customFrame.css';

const CustomFrame = (props) =>{

    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {(props.link==="/destekol") ? (
                <Link to={props.link} className="Button_link">
                <div className="solid">       
                        <div ><span><i className={props.icon}></i></span>{props.title}</div>
                </div>
            </Link>
            ): 
            <div className="Button_link whowe"  >
                <div className="solid">       
                    <div onClick={handleShow}><span ><i className={props.icon}></i></span>{props.title}</div>
                    <ModalWhoWe showInfo={show} closeInfo={handleClose} ></ModalWhoWe>           
                </div>
             </div>
            }
        </div>
    )
};
export default CustomFrame;