import React, {Component} from 'react';
import './navbar.css';

const Navbar = ()=>
  <div id="menu">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#"><img class="logo" src={require('./res/images/verBiPatiLogo.png')} alt="Ver Bi Pati"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Neler Yapıyoruz?
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Projelerimiz</a>
              <a class="dropdown-item" href="#">Etkinliklerimiz</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Besleme Programı</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Galeri</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kayıp & Sahiplendirme</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

export default Navbar;