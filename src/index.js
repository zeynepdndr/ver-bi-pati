import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoogleFontLoader from 'react-google-font-loader';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as serviceWorker from './serviceWorker';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import $ from 'jquery';


import { BrowserRouter } from 'react-router-dom'

import Firebase, {FirebaseContext} from './components/Firebase'

const app = (
    <>
    {/* Use it! */}
    <GoogleFontLoader
      fonts={[
        {
          font: 'Mansalva',
          weights: [400, '400i'],
        },
        {
          font: 'Roboto Mono',
          weights: [400, 700],
        },
        {
            font: ' Nunito Sans ',
            weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
 
    {/* <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
    <p style={{ fontFamily: 'Mansalva, sans-serif' }}>This will be in Roboto!</p> */}

    <BrowserRouter>
      <FirebaseContext.Provider value={new Firebase()}>
        <App/>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
