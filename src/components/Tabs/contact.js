import React, {Component} from 'react';
import './contact.css';

const Contact = ()=>
<div>
<div className="container-fluid">  
  <div className="container-fluid">
      <div className="row"> 
        <div className="col-sm-6">                 
          <h4>Adres</h4>
          <div class="pfblock-line"></div>
            <p className="lead">
              İstanbul Teknik Üniversitesi Maslak<br/>
              Kültür Sanat Binası<br/>
            </p>
            <br/>
            <br/>
            <div className="col">
             <p className="follow">Takipte Kalın! </p>   
            </div>
            <div className="row">
              <div className="col">                 
                <a href="https://twitter.com/itulupatiler"><img className="socialLogo" src={require('./../Res/images/twitterLogo.png')} alt="Ver Bi Pati"/></a>    
              </div>
              <div className="col">                 
                <a href="https://www.instagram.com/itulupatiler/? hl=tr"><img className="socialLogo" src={require('./../Res/images/instagramLogo.png')} alt="Ver Bi Pati"/></a>    
              </div>
              <br/>
              <br/>
              <br/>
            </div>
            <p className="mail"><span><img className="mailLogo" src={require('./../Res/images/mailLogo.png')} alt="Ver Bi Pati"/></span>itulupatiler@gmail.com</p>
          </div>     
          {/* Burasi nasil 2. column olur */}
          <div className="col-sm-6">
            <h4>İletişim Formu</h4>    
            <div className="pfblock-line"></div>  
            <form>
                <div className="col">
                  <input type="text" class="form-control" placeholder="Ad-Soyad"/>
                </div>
                <div className="col">
                  <input type="text" class="form-control" placeholder="E-mail"/>
                </div>      
                <div className="form-group col">
                  <textarea class="form-control" placeholder="Mesajınız" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>    
                <button type="submit" class="btn btn-primary">Gönder</button>                
            </form> 
          </div>
        </div>
      </div>
  </div>
  </div>

export default Contact;