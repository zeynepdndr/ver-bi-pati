import React, {Component} from 'react';
import './homepage.css';

const HomePage = ()=>
<div className="container-fluid" >
  <div className="row" id="row1">
  <h2 class="h5 d-flex align-items-center m-0 mr-2">
      <span class="bar-primary align-self-center"></span>
      DEĞERLERİMİZ
  </h2>
    <div className="col-sm">
      <div class="container-fluid">
        <img className = "icon" src={require('./../Res/images/icon1.jpg')}/>
        <div class="content">
          <h6>ÖZVERİ</h6>
          <p>Gece gündüz, yağmur kar demeden var gücümüzleçalışıyoruz.</p>
        </div>
      </div>
    </div>
    <div className="col-sm">
      <div class="container-fluid">
        <img className = "icon" src={require('./../Res/images/icon2.jpg')}/>
        <div class="content">
          <h6>HAYVANSEVERLİK</h6>
          <p>Attığımız her adımda içimizdeki hayvan sevgisini başka insanlara da aşılıyoruz.</p>
        </div>
      </div>
    </div>
    <div className="col-sm">
      <div class="container-fluid">
        <img className = "icon" src={require('./../Res/images/icon3.jpg')}/>
        <div class="content">
          <h6>KARARLILIK</h6>
          <p>Hiçbir zaman durmuyoruz çünkü onların bizden başka kimselerinin olmadığının farkındayız.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
  <h2 class="h5 d-flex align-items-center m-0 mr-2">
      <span class="bar-primary align-self-center"></span>
      HEDEFLERİMİZ
  </h2>
    <div className="col-sm">
      <div class="container-fluid">
        <img className = "icon" src={require('./../Res/images/image1.png')}/>
        <div class="content">
          <p>Hayvan duyarlılığını ve farkındalığı arttırmaya yönelik etkinlikler düzenlemek</p>
        </div>
      </div>
    </div>
    <div className="col-sm">
      <div class="container-fluid">
        <img className = "icon" src={require('./../Res/images/image2.jpg')}/>
        <div class="content">
          <p>Ulaşabildiğimiz insan kitlesini daha da arttırıp acil durumlarda daha hızı yardım edebilmek</p>
        </div>
      </div>
    </div>
    <div className="col-sm">
      <div class="container-fluid">
        <img className = "icon" src={require('./../Res/images/image6.jpg')}/>
        <div class="content">
          <p>Ulaştığımız tüm hayvanların tüm ihtiyaçlarını eksiksiz bir şekilde giderebilmek ve daha çok hayvanan dokunabilmek</p>
        </div>
      </div>
    </div>
    </div>
  </div>

export default HomePage;