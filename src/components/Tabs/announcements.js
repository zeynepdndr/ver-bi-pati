import React, {Component} from 'react';
import CustomButton from './../Shared/customButton'
import {ModalActivity} from '../Common/modalActivity'
import './announcements.css';
import { ModalAnnouncement } from '../Common/modalAnnouncement';

const Announcements = ()=>
<div>
  <div className="centeredButton">
    <CustomButton label="Kayıp ilanları"></CustomButton>
    <CustomButton label="Sahiplendirme ilanları"></CustomButton>
  </div>  
  <div className="container-fluid">
      <div className="buttonAlign">
          <ModalAnnouncement></ModalAnnouncement>
      </div>
    </div>
  <div className="gallery container-fluid" id="gallery">
    <div className="justify-content-center bg"> 
     <img className="img-fluid" id="image1" src={require('./../Res/images/gallery/caki.jpg')} alt="Card image cap"/>
     <div className="overlay">
        <p>1 Yaşında Erkek Golden Retriver "LUNA" Maslak İTÜ Kampüsünden kaybolmuştur. İletişim: 0555 555 55 55</p>

      </div>
    </div>
    <div className="justify-content-center bg"> 
     <img className="img-fluid" id="image2" src={require('./../Res/images/gallery/dog1.jpg')} alt="Card image cap"/>
     <div className="overlay">
      <a href="#" className="icon2" title="User Profile">
        <p>1 Yaşında Erkek Golden Retriver "LUNA" Maslak İTÜ Kampüsünden kaybolmuştur. İletişim: 0555 555 55 55</p>
      </a>
      </div>
    </div>
    <div className="justify-content-center bg"> 
     <img className="img-fluid" id="image3" src={require('./../Res/images/gallery/cat1.jpg')} alt="Card image cap"/>
     <div className="overlay">
      <a href="#" className="icon2" title="User Profile">
        <p>1 Yaşında Erkek Golden Retriver "LUNA" Maslak İTÜ Kampüsünden kaybolmuştur. İletişim: 0555 555 55 55</p>
      </a>
      </div>
    </div>
  </div>
</div>
export default Announcements;