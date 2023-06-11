import React, {Component} from "react";
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { getTokenData, getUserData } from "../api";
import "./Sign.css"
import { front } from "../server";

function changeLocation(){
    window.location.href = "/"
}
async function kostil(login){
    await getTokenData(login)
    // getUserData()
    changeLocation()
}
export default function Login () {
    const [login, setLogin] = useState(() => {
        return {
            email: "",
            password: "",
        }
    })
    const changeInputLogin = event => {
        event.persist()
        
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    const submitLogin = event =>{
        event.preventDefault();
        if(!validator.isEmail(login.email)) {
            alert("Введите почту")
        } else {
            try {
                kostil(login)
                
            } catch{
                alert("Введенные данные неверны")
            }
        }
    }
    // const submitLogin = event => {
    //     event.preventDefault();
    //     if(!validator.isEmail(login.email)) {
    //         alert("You did not enter email")
    //     } else {
    //         axios.post("http://127.0.0.1:8000/api/token/", {
    //             email: login.email,
    //             password: login.password,
                               
    //         }).then(res => {
    //             try {
    //                 console.log(res)
    //                 localStorage.setItem('token', res.data.access)
    //                 window.location.href = "http://localhost:3000/"
    //             } catch {
    //                 alert("There is already a user with this email")
    //             }
    //         }).catch(() => {
    //             alert("An error occurred on the server")
    //         })
    //     }
    // }
    return(
        <section>
            <div className="sign-body">
                <form class="form-container" id="form-sign-up" onSubmit={submitLogin}>
                    <div class="logo">
                        <a href="/">Edukid</a>
                    </div>
                    <h1 class="form-title">Вход</h1>
                    <div class="form-fields">
                        <div class="form-field">
                            <div class="form-field-title">E-MAIL</div>
                            <div class="form-field-input">
                                <img src=""/>
                                <input value = {login.email} class="for-input" type="email" name="email" required onChange={changeInputLogin}/>
                            </div>
                        </div>	
                        <div class="form-field">
                            <div class="form-field-title">Пароль</div>
                            <div class="form-field-input">
                                <img src=""/>
                                <input value = {login.password} type="password" name="password" required onChange={changeInputLogin}/>
                                <img src=""/>
                            </div>
                        </div>					
                    </div>
                    <div class="form-params">
                        <div class="remember-me">
                            <input type="checkbox" name="" id="remember-me-checkbox"/>
                            <label for="remember-me-checkbox">Запомнить меня</label>
                        </div>	
                        <a href="">Забыли пароль?</a>
                    </div>
                    <div class="sign-btn">
                        <input class="submit-sign-form" type="submit" name=""  value="Войти"/>
                    </div>
                    <div class="registration">
                        <span>Нет учетной записи?</span><br/>
                        <a href="/registration">Зарегистрироваться</a>
                    </div>
                </form>
            </div>
		</section>
    )
}
