import React, {Component} from 'react';
import './contact.css';

const Contact = ()=>
<div>
  <div className="container-fluid">
      <div className="row text-center">
        <div className="col-md-6 offset-md-3">
        <h4>Adres</h4>
        <div class="pfblock-line"></div>
          <p className="lead">
            İstanbul Teknik Üniversitesi Maslak<br/>
            Kültür Sanat Binası<br/>
          </p>
        </div>
        
      <br/>
      <div className="row text-center col-md-6 offset-md-3">
       <div className="col-sm-4">                 
          <a href="https://www.instagram.com/itulupatiler/? hl=tr"><img className="socialLogo" src={require('./../Res/images/facebookLogo.png')} alt="Ver Bi Pati"/></a>    
        </div>
        <div className="col-sm-4">                 
          <a href="https://www.instagram.com/itulupatiler/? hl=tr"><img className="socialLogo" src={require('./../Res/images/instagramLogo.png')} alt="Ver Bi Pati"/></a>    
        </div>
        <div className="col-sm-4">                 
          <a href="https://www.instagram.com/itulupatiler/? hl=tr"><img className="socialLogo" src={require('./../Res/images/mailLogo.png')} alt="Ver Bi Pati"/></a>    
        </div>
      </div>
    </div>
  </div>
</div>

export default Contact;