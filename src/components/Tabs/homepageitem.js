import React, {Component} from 'react';
import './homepageitem.css';

const HomePageItem = (props) =>{
    return (
        <div className="col-sm">
        <div className="container-fluid">
          <img className="icon" id={props.id} src={props.imgPath} alt=""/>       
          <div className="content">
            <h6>{props.title}</h6>
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    );
};
export default HomePageItem;