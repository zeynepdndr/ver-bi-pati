import React, {Component} from 'react';
import './navbar.css';
import NavigationItem from '../NavigationItem/navigationItem';

const Navbar = (props)=>(
  <div id="menu">
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#"><img className="logo" src={require('./../../Res/images/verBiPatiLogo.png')} alt="Ver Bi Pati"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Neler Yapıyoruz?
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Projelerimiz</a>
              <a className="dropdown-item" href="#">Etkinliklerimiz</a>
            </div>
          </li>
          <NavigationItem link="/">Besleme Programı</NavigationItem>
          <NavigationItem link="/">Destek Ol</NavigationItem>
          <NavigationItem link="/">Kayıp {"&"} Sahiplendirme</NavigationItem>
          <NavigationItem link="/">Galeri</NavigationItem>
          <NavigationItem link="/">Üye Ol</NavigationItem>
          <NavigationItem link="/">İletişim</NavigationItem>
        </ul>
      </div>
    </nav>
  </div>
)
export default Navbar;