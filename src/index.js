import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GoogleFontLoader from "react-google-font-loader";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter } from "react-router-dom";

import Firebase, { FirebaseContext } from "./components/Firebase";

import { UserProvider } from "./components/Auth/UserContext";

const app = (
  <>
    {/* Use it! */}
    <GoogleFontLoader
      fonts={[
        {
          font: "Mansalva",
          weights: [400, "400i"]
        },
        {
          font: "Baloo Paaji 2",
          weights: [400, 700]
        },        
        {
          font: 'Indie Flower',
          weights: [400, 700]
        },
        {
          font: " Nunito Sans ",
          weights: [400, 700]
        }
      ]}
      subsets={["cyrillic-ext", "greek"]}
    />

    {/* <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
    <p style={{ fontFamily: 'Mansalva, sans-serif' }}>This will be in Roboto!</p> */}
    <BrowserRouter>
      <FirebaseContext.Provider value={new Firebase()}>
        <UserProvider>
          <App />
        </UserProvider>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
