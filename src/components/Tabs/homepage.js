import React, { Component } from "react";
import "./homepage.css";
import HomePageItem from "./homepageitem";
import Slide from "../Shared/slide";
import AlignItemsList from "../Shared/scrollingList";

const HomePage = (props)=>
<div>
  <div className="container-fluid slider">
    <Slide cellSpacing={20} slideWidth={0.75}></Slide>
  </div>
  <div className="listClass">
    <AlignItemsList/>
  </div>
</div>  



export default HomePage;
