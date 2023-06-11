import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from "./Pages/Home";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { checkAuth, fetchWithAuth, getUserData } from './api';
import MyClasses from './Pages/MyClasses';
//
 import { useSelector } from 'react-redux';
import AddHomework from './Pages/AddHomework';
import Homeworks from './Pages/Homewroks';
import "./Pages/kostil.css"
import Homewo from './Pages/Homewo';
import AddAnswer from './Pages/AddAnswer';
import MySlider from './Components/MySlider'; 
import Logout from './Pages/Logout';

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
        <Route path="/my-classes"  element={<MyClasses/>}/>
        <Route path="/homework/:id" render={(props) => <Homewo itemId={props.match.params.id} myProp="someValue" />} />
        <Route path="/Homewo/:id" element={<Homewo />} />
        <Route path="/homeworks"  element={<Homeworks/>}/>
        <Route path="/addHomework"  element={<AddHomework/>}/>        
        <Route path="/addAnswer/:id"  element={<AddAnswer/>}/>        
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/registration"  element={<Registration/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path='/check' element={<MySlider/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
