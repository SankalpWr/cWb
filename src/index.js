import React from 'react';
import ReactDOM from 'react-dom';//'react-dom ' error if spaced
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';//web vitals is neutral here, you may remove it
import store from "./redux/configureStore"
import {Provider} from "react-redux"

ReactDOM.render(

   <Provider store={store}>
    <App />
   </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

