import React, {Component} from 'react';
import './projects.css';

const Projects = ()=>
<div className="container-fluid">  
  <div className="container-fluid">
      <div className="row"> 
        <div className="col-sm-6">                 
          <h4>Neler Yapıyoruz?</h4>
          <div className="pfblock-line"></div>
          <p className="lead">
            <ul class="fa-ul">
              <li><i class="fa-li fa fa-paw"></i>Düzenli beslemeler</li>
              <li><i class="fa-li fa fa-paw"></i>Okuldaki hayvanların ve sağlık durumlarının takibi</li>
              <li><i class="fa-li fa fa-paw"></i>Yaralı ya da hasta hayvanların kliniğe götürülmesi, tedavilerinin yapılması ve bu sürecin takip
               edilmesi</li>
              <li><i class="fa-li fa fa-paw"></i>Mama ve diğer ihtiyaçlarının temin edilmesi için bağış toplanması</li>
              <li><i class="fa-li fa fa-paw"></i>Yavru veya muhtaç hayvanların sahiplendirilmesi</li>
              <li><i class="fa-li fa fa-paw"></i>Barınak ziyaretleri ve yardımları</li>
            </ul>
            </p> </div>     
          {/* Burasi nasil 2. column olur */}
          <div className="col-sm-6">
            <h4>Planlarımız</h4>    
            <div className="pfblock-line"></div>  
            <p className="lead">
            <ul class="fa-ul">
              <li><i class="fa-li fa fa-paw"></i>Düzenli beslemeler</li>
              <li><i class="fa-li fa fa-paw"></i>Okuldaki hayvanların ve sağlık durumlarının takibi</li>
              <li><i class="fa-li fa fa-paw"></i>Yaralı ya da hasta hayvanların kliniğe götürülmesi, tedavilerinin yapılması ve bu sürecin takip
               edilmesi</li>
              <li><i class="fa-li fa fa-paw"></i>Mama ve diğer ihtiyaçlarının temin edilmesi için bağış toplanması</li>
              <li><i class="fa-li fa fa-paw"></i>Yavru veya muhtaç hayvanların sahiplendirilmesi</li>
              <li><i class="fa-li fa fa-paw"></i>Barınak ziyaretleri ve yardımları</li>
            </ul>
            </p> 
          </div>
        </div>
      </div>
  </div>


export default Projects;