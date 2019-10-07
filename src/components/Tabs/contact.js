import React, {Component} from 'react';
import './contact.css';

const Contact = ()=>
<div>
  <div className="container-fluid">
      <div className="row text-center">

        <div className="pfblock-line"></div>   

        <div className="col-sm-6 sm-offset-6">
        <h4>Adres</h4>
        <div class="pfblock-line"></div>
          <p className="lead">
            İstanbul Teknik Üniversitesi Maslak<br/>
            Kültür Sanat Binası<br/>
          </p>
        </div>

      <br/>     
      <div className="row text-center">
        <div className="col-sm-4">        
          <h3>Inquiries</h3>            
          <a href="mailto:info@instabase.com">info@instabase.com</a>
        </div>

        <div className="col-sm-4">        
          <h3>Instagram</h3>            
          <a href="mailto:jobs@instabase.com">https://www.instagram.com/itulupatiler/? hl=tr</a>           
        </div>

        <div className="col-sm-4">  
          <h3>Press</h3>            
          <a href="mailto:press@instabase.com">press@instabase.com</a>            
        </div>

      </div>
    </div>
  </div>
</div>

export default Contact;