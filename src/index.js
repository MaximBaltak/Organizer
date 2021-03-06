import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/store";
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    <AppContainer />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


window.store=store.getState()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
