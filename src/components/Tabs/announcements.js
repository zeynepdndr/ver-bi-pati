import React, {Component} from 'react';
import './announcements.css';

const Announcements = ()=>
<div>
  <div className="centeredButton">
    <button className="btn btn-default filter-button " data-filter="all">Kayip ilanları</button>
    <button className="btn btn-default filter-button" data-filter="hdpe">Sahiplendirme ilanları</button>  
  </div>
  
  <div className="gallery container-fluid" id="gallery">
    <div className="justify-content-center"> 
     <img className="img-fluid" id="image1" src={require('./../Res/images/gallery/caki.jpg')} alt="Card image cap"/>
     <div class="overlay">
      <a href="#" class="icon2" title="User Profile">
        <p>1 Yaşında Erkek Golden Retriver "LUNA" Maslak İTÜ Kampüsünden kaybolmuştur. İletişim: 0555 555 55 55</p>
      </a>
      </div>
    </div>
    <div className="justify-content-center"> 
     <img className="img-fluid" id="image1" src={require('./../Res/images/gallery/dog1.jpg')} alt="Card image cap"/>
     <div class="overlay">
      <a href="#" class="icon2" title="User Profile">
        <p>1 Yaşında Erkek Golden Retriver "LUNA" Maslak İTÜ Kampüsünden kaybolmuştur. İletişim: 0555 555 55 55</p>
      </a>
      </div>
    </div>
    <div className="justify-content-center"> 
     <img className="img-fluid" id="image1" src={require('./../Res/images/gallery/cat1.jpg')} alt="Card image cap"/>
     <div class="overlay">
      <a href="#" class="icon2" title="User Profile">
        <p>1 Yaşında Erkek Golden Retriver "LUNA" Maslak İTÜ Kampüsünden kaybolmuştur. İletişim: 0555 555 55 55</p>
      </a>
      </div>
    </div>
  </div>
</div>
export default Announcements;