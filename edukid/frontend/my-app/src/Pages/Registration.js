import { getValue } from "@testing-library/user-event/dist/utils";
import React, {Component} from "react";
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import "./Sign.css"
import { front, server } from "../server";


export default function Register () {
    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
            password2: "",
            name: "",
            surname:"",
            father_name:"",
            role:"pupil",
        }
    })
     
    const changeInputRegister = event => {
        event.persist()
        
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
     
     
    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("You did not enter email")
        } else if(register.password !== register.password2) {
            alert("Repeated password incorrectly")
        } else {
            axios.post(server+"/api/user/", {
                name: register.name,    
                surname: register.surname,
                father_name: register.father_name,
                type_of_user: register.role,
                email: register.email,
                password: register.password
                               
            }).then(res => {
                console.log(res)
                if (res.statusText === 'Created') {
                    window.location.href = front+"login"
                } else {
                    alert("There is already a user with this email")
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
        }
    }
        return(
            <div className="sign-body">
            <section>
                <form id="registration-form" class="form-container" method="post" onSubmit={submitChackin}>
                    <div class="logo">
                        <a href="/">Edukid</a>
                    </div>
                    <h1 class="form-title">Регистрация</h1>
                    <div class="form-field">
                        <div class="userType">
                            <input type="radio" id="pupil" name="role" value="pupil" onChange={changeInputRegister}/>
                            <label for="pupil">Ученик</label>
                            <input type="radio" id="teacher" name="role" value="teacher" onChange={changeInputRegister}/>
                            <label for="teacher">Учитель</label>
                            <input type="radio" id="parent" name="role" value="parent" onChange={changeInputRegister}/>
                            <label for="parent">Родитель</label>
                        </div>
                    </div>
                    <div class="form-field">
                        <div class="form-field-title">Имя</div>
                        <div class="form-field-input">
                            <img src=""/>
                            <input value={register.name} name="name" type="text" onChange={changeInputRegister}/>
                        </div>
                    </div>
                    <div class="form-field">
                        <div class="form-field-title">Фамилия</div>
                        <div class="form-field-input">
                            <img src=""/>
                            <input value={register.surname} name="surname" type="text" onChange={changeInputRegister}/>
                        </div>
                    </div>
                    <div class="form-field">
                        <div class="form-field-title">Отчество</div>
                        <div class="form-field-input">
                            <img src=""/>
                            <input value={register.father_name} name="father_name" type="text" onChange={changeInputRegister}/>
                        </div>
                    </div>
                                    <div class="form-field">
                        <div class="form-field-title">Почта</div>
                        <div class="form-field-input">
                            <img src=""/>
                            <input value={register.email} name="email" type="text" onChange={changeInputRegister}/>
                        </div>
                    </div>
                    <div class="form-field">
                        <div class="form-field-title">Пароль</div>
                        <div class="form-field-input">
                            <img src=""/>
                            <input value={register.passsword} name="password" type="password" onChange={changeInputRegister}/>
                        </div>
                    </div>
                    <div class="form-field">
                        <div class="form-field-title">Повторите пароль</div>
                        <div class="form-field-input">
                            <img src=""/>
                            <input value={register.password2} name="password2" type="password" onChange={changeInputRegister}/>
                        </div>
                    </div>
                    <div class="sign-btn">
                        <input class="submit-sign-form" type="submit" id="submitBtn" value="Зарегистрироваться"/>
                    </div>
                    <div class="registration">
                        <span>Уже есть учетная запись?</span><br/>
                        <a href="/login">Войти</a>
                    </div>
                </form>
            </section>
            </div>
        )
    
}