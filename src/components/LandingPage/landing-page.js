import React, {Component} from 'react';

import './landing-page.css';
import  CustomButton  from './../Shared/customButton'

const LandingPage = ()=>
<div className="container-fluid">  
  <div className="row"> 
    <div className="col-sm-6">      
      <h4 id="intro">İstanbul Teknik Üniversitesi'nde, <br/>kampüs hayvanlarının her türlü bakımını üstlenmek üzere kurulmuş <br/>gönüllük esaslı bir öğrenci kulübüyüz.</h4>
        <a className="btn btn-primary btn-lg" href="/anasayfa" role="button">Daha Fazlası</a> 
        <CustomButton label="Daha Fazlası"></CustomButton>
        {/* Button homepage'e route etmeli */}

    </div>
    <div className="col-sm-6" id="rotation">
      <img id="jumbotronImage" src={require('./../Res/images/verBiPatiLogo.png')} alt="Ver Bi Pati"/>
    </div>
  </div>
</div>
export default LandingPage;