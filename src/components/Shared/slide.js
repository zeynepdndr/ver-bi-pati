import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slide = ()=>
    <AwesomeSlider >
    <div>
        <img src={require("./../Res/images/slider/s2.jpeg")} />
    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg" />
    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg" />
    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2018/04/23/14/38/adorable-3344414_960_720.jpg" />
    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2015/03/05/03/56/dog-659856_960_720.jpg" />
    </div>
</AwesomeSlider>

export default Slide;
