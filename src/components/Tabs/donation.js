import React, {Component} from 'react';
import './donation.css';

const Donation = ()=>
<div className="container-fluid text-center">
<img className="imageSlider" src={require('./../Res/images/donationSlider.png')} alt="" />       
  <div className="container-fluid">
  <h2>Desteğinle daha fazlasını mutlu edelim</h2>  
  <div className="pfblock-line donationLine"></div> 
      <div className="row"> 
        <div className="col-sm-4">
          <div className="card bg-light mb-3" >
            <div className="card-header">Havale/EFT </div>
            <div className="card-body">
              <h5 className="card-title">Hesap adı: Ver'bi Pati Derneği<br/>
                      Banka adı: Yapı ve Kredi Bankası<br/>
                      Şube: 495<br/>
                      IBAN No: TR16 0006 7010 0000 0050 0909 98 
                      <br/><br/>Tedavi masrafları ve mama alımı bütçemize katkın olsun.
                      </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">    
          <div className="card bg-light mb-3 text-white" id="new-orange">
            <div className="card-header">Mama Bağışı</div>
            <div className="card-body">
              <h5 className="card-title">Ormana Mama sitesine girerek kumbara başlığı ardından Verbi'pati seçerek mama gönderebilirsin. Teslimat adresi gerekmeden kumbarada biriken mamalar bize teslim ediliyor.</h5>
            </div>
          </div>                
        </div>
        <div className="col-sm-4">
          <div className="card text-white bg-dark">
            <div className="card-header">Kulübümüze Üye</div>
            <div className="card-body">
              <h5 className="card-title">Kulübümüze üye olarak kampüs hayvanlarımızın beslenme, tedavi gibi ihtiyaçlarını birlikte karşılayabiliriz.
</h5>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
export default Donation;

