import React, {Component, useEffect, useRef, useState} from "react";

import "./Header.css";
import { checkAuth, getUserData } from "../api";
// import { Selector } from "react-redux";
import imagessvg from "../images/svg/burger1.svg"

export default function Header() {
            const [userBox, setUserBox] = useState(<div className="sign-button"><a href="/login"><button id="sign-btn">Войти</button></a></div>)
            const loadingUserData = function (){
                
                getUserData().then(()=>{
                const userData = JSON.parse(localStorage.userData)
                setUserBox(<div className="kostil">
                            <button className="username_box">
                                <a href="/profile" className="username_box_name">{userData[0].name} {userData[0].surname}</a>
                            </button>
                            <div className="sign-button logout">
                                <a href="/logout">
                                    <button id="sign-btn" >Выйти</button>
                                </a>
                            </div>
                        </div>)})
            }
            useEffect(()=> {loadingUserData()}, [])
            useEffect(()=>{
                
                    })
        // function userBox(){
        //     if (checkAuth()){
        //         const userData = JSON.parse( localStorage.userData)
        
        //         return  <div className="kostil">
        //                     <button className="username_box">
        //                         <a href="/profile" className="username_box_name">{userData[0].name} {userData[0].surname}</a>
        //                     </button>
        //                     <div className="sign-button logout">
        //                         <a href="account/logout">
        //                             <button id="sign-btn">Выйти</button>
        //                         </a>
        //                     </div>
        //                 </div>
        //     }
            
        //     return <div className="sign-button"><img src="{% static 'main/images/svg/Vector.svg' %}"/><a href="/login"><button id="sign-btn">Войти</button></a></div>
        // }
        // useEffect(()=> {getUserData().then(loadingUserData())}, [])
        function burger (e){
            e.target.classList.toggle("active")
            // let drop_menu = document.getElementById("header__burger")
            // drop_menu.addEventListener("click", function () {
            // drop_menu.classList.toggle("active");})
        }
        return(
            <header className="header">
                <div className="header_content container">
                    <nav className="menu_body">
                        <div className="burger" >
                            <div className="header__burger" onClick={burger} id="burger">
                                <span></span>
                                <div className="header__burger-menu">
                                    <ul className="burger-list">
                                        <li>
                                            <img src={imagessvg}/>
                                            <a href="/my-classes">Мой класс</a>
                                        </li>
                                        <li>
                                            <img src="../images/svg/burger2.svg"/>
                                            <a href="">Мои тетради</a>
                                        </li>
                                        <li>
                                            <img src="{% static 'main/images/svg/burger3.svg' %}"/>
                                            <a href="/homeworks">Задания</a>
                                        </li>
                                        <li>
                                            <img src="{% static 'main/images/svg/burger4.svg' %}"/>
                                            <a href="">Моя успеваемость</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="logo">
                            <a href="/">Edukid</a>
                        </div>
                        <ul class="menu_list">
                            <li><a href="/my-classes" className="menu_link">Мой класс</a></li>
                            <li><a href="" className="menu_link">Мои тетради</a></li>
                            <li><a href="/homeworks" className="menu_link">Задания</a></li>
                            <li><a href="" className="menu_link">Моя успеваемость</a></li>
                        </ul>
                        {userBox}
                    </nav>
                </div>
		    </header>
        )
}