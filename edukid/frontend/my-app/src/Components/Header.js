import React, {Component} from "react";

import "./Header.css";
import { checkAuth, getUserData } from "../api";
// import { Selector } from "react-redux";
function userBox(){
    
    if (checkAuth()){
        const userData = JSON.parse( localStorage.userData)

        return  <div className="kostil">
                    <button className="username_box">
                        <a href="/profile" className="username_box_name">{userData[0].name} {userData[0].surname}</a>
                    </button>
                    <div className="sign-button logout">
                        <a href="account/logout">
                            <button id="sign-btn">Выйти</button>
                        </a>
                    </div>
                </div>
    }
    
    return <div className="sign-button"><img src="{% static 'main/images/svg/Vector.svg' %}"/><a href="/login"><button id="sign-btn">Войти</button></a></div>
}

export default class Header extends Component{
    

    render(){
        // const isAuth= useSelector(state => state.user.isAuth);
        
        return(
            <header className="header">
                <div className="header_content container">
                    <nav className="menu_body">
                        <div className="burger">
                            <div className="header__burger" id="burger">
                                <span></span>
                                <div className="header__burger-menu">
                                    <ul className="burger-list">
                                        <li>
                                            <img src="{% static 'main/images/svg/burger1.svg' %}"/>
                                            <a href="/my_classes">Мой класс</a>
                                        </li>
                                        <li>
                                            <img src="{% static 'main/images/svg/burger2.svg' %}"/>
                                            <a href="">Мои тетради</a>
                                        </li>
                                        <li>
                                            <img src="{% static 'main/images/svg/burger3.svg' %}"/>
                                            <a href="">Задания</a>
                                        </li>
                                        <li>
                                            <img src="{% static 'main/images/svg/burger4.svg' %}"/>
                                            <a href="/progress">Моя успеваемость</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="logo">
                            <a href="/">Edukid</a>
                        </div>
                        <ul class="menu_list">
                            <li><a href="" className="menu_link">О нас</a></li>
                            <li><a href="" className="menu_link">Для кого</a></li>
                            <li><a href="" className="menu_link">Возможности</a></li>
                            <li><a href="" className="menu_link">Контакты</a></li>
                        </ul>
                        {userBox()}
                    </nav>
                </div>
		    </header>
        )
    }
}