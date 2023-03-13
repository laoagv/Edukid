import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.addEventListener("DOMContentLoaded", event => {


  let burger = document.getElementById("burger")
  burger.addEventListener("click", function () {
      burger.classList.toggle("active");
  })
  // const classBtn = document.getElementById("class-btn")
  // classBtn.addEventListener("click", function(){
  //     classBtn.parentElement.classList.toggle("active")
  // })
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <App />,
      document.getElementById('root')
  );

})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
