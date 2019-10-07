import React, {Component} from 'react';

import './landing-page.css';

const LandingPage = ()=>
  <div className="jumbotron">
      <img id="jumbotronImage" src={require('./../Res/images/verBiPatiLogo.png')} alt="Ver Bi Pati"/>
    <hr className="my-4"/>
      <h5>İstanbul Teknik Üniversitesi bünyesinde kampüs hayvanlarının her türlü bakımını üstlenmek üzere kurulmuş gönüllük esaslı bir öğrenci kulübüyüz.</h5>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Daha Fazlası</a> 
        {/* Button MainPage'e route etmeli */}
      </p>
  </div>

export default LandingPage;