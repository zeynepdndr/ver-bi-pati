import React, {Component} from 'react';
import './donation.css';

const Donation = ()=>
<div className="container-fluid text-center">
<img className="imageSlider" src={require('./../Res/images/donationSlider.png')} alt="" />       
  <div className="container-fluid">
  <h2>Desteğinle daha fazlasını mutlu edelim</h2>  
  <div className="pfblock-line donationLine"></div> 
      <div className="row text-center"> 
        <div className="col-sm-4">
          <p className="channel">
            Havale/EFT ile destek olabilirsiniz.<br/>
            Hesap adı: Ver'bi Pati Derneği<br/>
            Banka adı: Yapı ve Kredi Bankası<br/>
            Şube: 495<br/>
            IBAN No: TR16 0006 7010 0000 0050 0909 98 
         </p>
        </div>
        <div className="col-sm-4">                 
          <p className="channel">
              Ormanamama sayfasında kumbara bölümünden istediğiniz yeri seçerek sipariş verebilirsiniz.
          </p>     
        </div>
        <div className="col-sm-4">
          <p className="channel">
              Kulübümüze üye olarak kampüs hayvanlarımızın beslenme, tedavi gibi ihtiyaçlarını birlikte karşılayabiliriz.
         </p>
        </div>
      </div>
  </div>
</div>
export default Donation;