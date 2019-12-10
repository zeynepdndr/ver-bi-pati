import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './landing-page.css';
import  CustomButton  from './../Shared/customButton'

const LandingPage = (props)=>
<div className="container-fluid">  
  <div className="row"> 
    <div className="col-sm-6" id="leftSide">      
      <img id="jumbotronImage" src={require('./../Res/images/who.jpg')} alt="Ver Bi Pati"/>
      <h4 id="intro">İstanbul Teknik Üniversitesi'nde, <br/>kampüs hayvanlarının her türlü bakımını üstlenmek üzere kurulmuş <br/>gönüllük esaslı bir öğrenci kulübüyüz.</h4>
        <Link to="/anasayfa" >    
          <button
            className="btn btn-default filter-button"
            id="introButton"
            data-filter="all"
          >
            DAHA FAZLASI
          </button>
        </Link>
      </div>
    <div className="col-sm-6" id="rotation">
      <img id="jumbotronImage" src={require('./../Res/images/verBiPatiLogo.png')} alt="Ver Bi Pati"/>
    </div>
  </div>
</div>
export default LandingPage;