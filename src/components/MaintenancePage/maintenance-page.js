import React, {Component} from 'react';
import './maintenance-page.css';

const MaintenancePage = (props)=>
{

  return(
  <div>  
    <div className="row"> 
      <div>
        <img id="backgroundMaintenance" src={require('./../Res/images/Maintenance.png')} alt="Ver Bi Pati"/>
      </div>
      <div className="col-sm-6"> 
        <h4>İstanbul Teknik Üniversitmuş <br/>gönüllük esaslı bir öğrenci kulübüyüz.</h4>
      </div>
    </div>
  </div>
  )
}
export default MaintenancePage;