import React, {Component} from 'react';
import './homepage.css';
import HomePageItem from './homepageitem';

const HomePage = ()=>
<div className="container-fluid" >
  <div className="row" id="row1">
    <h2 class="h5 d-flex align-items-center m-0 mr-2">
        <span class="bar-primary align-self-center"></span>
        DEĞERLERİMİZ
    </h2>
    <HomePageItem title="ÖZVERİ" imgPath= {require('./../Res/images/icon1.jpg')}>Gece gündüz, yağmur kar demeden var gücümüzle çalışıyoruz.</HomePageItem>
    <HomePageItem title="HAYVANSEVERLİK" imgPath= {require('./../Res/images/icon2.jpg')}>Attığımız her adımda içimizdeki hayvan sevgisini başka insanlara da aşılıyoruz.</HomePageItem>
    <HomePageItem title="KARARLILIK" imgPath= {require('./../Res/images/icon3.jpg')} >Hiçbir zaman durmuyoruz çünkü onların bizden başka kimselerinin olmadığının farkındayız.</HomePageItem>
  </div>
  <div className="row">
    <h2 class="h5 d-flex align-items-center m-0 mr-2">
        <span class="bar-primary align-self-center"></span>
        HEDEFLERİMİZ
    </h2>
    <HomePageItem imgPath= {require('./../Res/images/image1.png')}>Hayvan duyarlılığını ve farkındalığı arttırmaya yönelik etkinlikler düzenlemek</HomePageItem>
    <HomePageItem imgPath= {require('./../Res/images/image2.jpg')}>Ulaşabildiğimiz insan kitlesini daha da arttırıp acil durumlarda daha hızı yardım edebilmek</HomePageItem>
    <HomePageItem imgPath= {require('./../Res/images/image6.jpg')}>Ulaştığımız tüm hayvanların tüm ihtiyaçlarını eksiksiz bir şekilde giderebilmek ve daha çok hayvanan dokunabilmek</HomePageItem>
    </div>
</div>

export default HomePage;