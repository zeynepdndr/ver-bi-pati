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
              <h5 className="card-title">
                      Banka: Türkiye Vakıflar Bankası <br/>
                      Şube: İstanbul Teknik Üniversitesi Vakıfbank Osmanbey<br/>
                      IBAN No: TR38 0001 5001 5800 7294 0140 71<br/>
                      Açıklama: İTÜ Gönüllülük Kulübü Ver'bi Pati Bağış<br/>
                      <br/>Tedavi masrafları ve mama alımı bütçemize katkın olsun.
                      </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">    
          <div className="card bg-light mb-3 text-white" id="new-orange">
            <div className="card-header">Mama Bağışı</div>
            <div className="card-body">
              <h5 className="card-title"><a  target="_blank" href={"https://www.ormanamama.com/"}>Ormana Mama</a> sitesine girerek kumbara başlığı ardından Verbi'pati seçerek mama gönderebilirsin. Teslimat adresi gerekmeden kumbarada biriken mamalar bize teslim ediliyor.</h5>
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

