//Ract
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

//SW
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
//Internalization
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";




function getLocale() {
  const locLang = navigator.language;
  console.log("en Index "+ locLang)

  if(locLang === "en-US") {
    return localeEnMessages;
  } else {
    return localeEsMessages;
  }
}


ReactDOM.render(
  
  <IntlProvider locale={navigator.language} messages={getLocale()}>
    <App />
  </IntlProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();