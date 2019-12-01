import React, {Component} from 'react';
import Emoji from 'a11y-react-emoji'

import './notification.css';

class Notification extends Component{
    render(){
        return (
            <div id="w">
                <div id="content">
                    <div class="notify successbox">
                    {/* <Emoji symbol="💕" label="love" /> */}
                        <h1>Yeni etkinlik! <span aria-label="a rocket blasting off" role="img">🚀</span></h1>
                        <p>Tüm gönüllülerimizle beraber 41. Vodafone İstanbul Maratonuna katılıyoruz. Oraya hep beraber gidip kalabalik bir şekilde danslarla ve çeşitli etkinliklerle farkındalık yaratmaya çalışacağız. Detaylar için </p>
                    </div>               
                    <div class="notify errorbox">
                        <h1>Kayıp ilanı eklendi <span aria-label="acrying cat" role="img">😿</span></h1>
                        <p>You did not set the proper return e-mail address. Please fill out the fields and then submit the form.</p>
                    </div>
                    <div class="notify successbox">
                {/* <Emoji symbol="💕" label="love" /> */}
                        <h1>Yeni yuvasını arıyoruz <span aria-label="wedding" role="img">💒</span></h1>
                        <p>Tüm gönüllülerimizle beraber 41. Vodafone İstanbul Maratonuna katılıyoruz. Oraya hep beraber gidip kalabalik bir şekilde danslarla ve çeşitli etkinliklerle farkındalık yaratmaya çalışacağız. Detaylar için </p>
                   </div>   
                   <div class="notify successbox">
                        {/* <Emoji symbol="💕" label="love" /> */}
                        <h1>Yeni fotograflara göz at<span aria-label="face with monocle" role="img">🧐</span></h1>
                        <p>Tüm gönüllülerimizle beraber 41. Vodafone İstanbul Maratonuna katılıyoruz. Oraya hep beraber gidip kalabalik bir şekilde danslarla ve çeşitli etkinliklerle farkındalık yaratmaya çalışacağız. Detaylar için </p>
                    </div>   
                </div>
            </div>
        )
    }
}
export default Notification;

