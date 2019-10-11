import React, {Component} from 'react';
import './donation.css';

const Donation = ()=>
<div className="container-fluid">
  <h2>Desteğinle daha fazlasını mutlu edelim</h2>  
  <div className="pfblock-line"></div>    
  <div className="container-fluid">
      <div className="row text-center"> 
        <div className="col-sm-6">
          <p className="channel">
            Havale/EFT ile destek olabilirsiniz.<br/>
            Hesap adı: Ver'bi Pati Derneği<br/>
            Banka adı: Yapı ve Kredi Bankası<br/>
            Şube: 495<br/>
            IBAN No: TR16 0006 7010 0000 0050 0909 98 
         </p>
        </div>
        <div className="col-sm-6">                 
          <p className="channel">
              Ormanamama sayfasında kumbara bölümünden istediğiniz yeri seçerek sipariş verebilirsiniz.
          </p>     
        </div>
        <img className="imageSlider" src={require('./../Res/images/donationSlider.jpg')} alt="" />    
      </div>
  </div>
</div>
export default Donation;