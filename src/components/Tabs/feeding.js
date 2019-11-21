import React, {Component} from 'react';
import CustomButton from './../Shared/customButton'
import './feeding.css';

const Feeding = ()=>
<div>
  <div className="centeredButton">
    <CustomButton label="Besleme Planı"></CustomButton>
    <CustomButton label="Harita"></CustomButton>
  </div>
  <div className="gallery container-fluid" id="gallery">
    <div className="justify-content-center"> 
    
    </div>
  </div>
</div>
export default Feeding;