import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from "./Pages/Home";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { checkAuth, fetchWithAuth, getUserData } from './api';
// import { useSelector } from 'react-redux';


function App() {
  // const isAuth= useSelector(state => state.user.isAuth);
  // if (checkAuth()){
  //   localStorage.setItem("userData",getUserData())
  //   console.log(JSON.parse(localStorage.userData).name)
  // }
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/registration"  element={<Registration/>}/>
        <Route path="/login"  element={<Login/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
