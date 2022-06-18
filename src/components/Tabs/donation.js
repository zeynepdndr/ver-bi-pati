import React, {Component} from 'react';
import './donation.css';

const Donation = ()=>
<div className="container-fluid text-center">
  {/* <div className="container-fluid"> */}
  <h2>DESTEK OL</h2>
      <div className="row"> 
        <div className="col-sm-3">
        <img className="img-fluid" src={require('./../Res/images/donationicon.jpeg')} alt="Card image cap"/>
          <h4>Mama Bağışı</h4>
          <p>
            İTÜ Kampüslerinde devam eden beslemelerimiz için <a  target="_blank" href={"https://www.ormanamama.com/itu-nun-patileri"}>buraya</a> tıklayarak bize mama gönderebilirsin.
          </p>
        </div>
        <div className="col-sm-3">    
          <img className="img-fluid" src={require('./../Res/images/donationicon1.jpeg')} alt="Card image cap"/>
          <h4>Klinik Tedavileri için Destek Ol</h4>
          <p>
          Tüm hayvanlarımızın sağlık ihtiyaçlarını eksiksiz bir şekilde karşılamaya çalışıyoruz. Klinik bütçemiz için bize destek olmak için maddi yardımda bulunabilirsin. </p>              
        </div>
        <div className="col-sm-3">
        <img className="img-fluid" src={require('./../Res/images/donationicon2.jpeg')} alt="Card image cap"/>
          <h4>Koruyucu Aile Ol</h4>
          <p>
          Bir kampüs hayvanının maddi ihtiyaçlarına destek olarak evine alamasan da onun ailesi olabilirsin. Koruyucu aile programına katılarak bize destek olmak için aşağıdaki linke tıkla.   </p>
        </div>
        <div className="col-sm-3">
        <img className="img-fluid" src={require('./../Res/images/donationicon3.jpeg')} alt="Card image cap"/>
          <h4>Üye Ol</h4>
          <p>
          Ver Bi' Pati ailesine katıl ve kampüs hayvanlarımızın ihtiyaçlarını hep beraber giderelim. Aramıza katılmak linke tıklayarak başvuru formunu doldur. </p>
        </div>
      </div>
  {/* </div> */}
</div>
export default Donation;

