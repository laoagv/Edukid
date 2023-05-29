import { getValue } from "@testing-library/user-event/dist/utils";
import React, {Component} from "react";
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

// export default class Registration extends Component{
//     state ={
//         email: '',
//         passsword: '',
//         name: '',
//         surname: '',
//         father_name: '',
//         role: '',
//         repeatPass: ''
//     }
//     handleName = ({target: {value}})=>{
//         this.setState({
//             name: value
//         })
//     }
//     handleEmail = ({target: {value}})=>{
//         this.setState({
//             email: value
//         })
//     }
//     handlePassword = ({target: {value}})=>{
//         this.setState({
//             passsword: value
//         })
//     }
//     handleSurname = ({target: {value}})=>{
//         this.setState({
//             surname: value
//         })
//     }
//     handleFatherName = ({target: {value}})=>{
//         this.setState({
//             father_name: value
//         })
//     }
//     handleRole = ({target: {value}})=>{
//         this.setState({
//             role: value
//         })
//     }
//     handleRepeatPass = ({target: {value}})=>{
//         this.setState({
//             repeatPass: value
//         })
//     }
//     render(){
//         const {email, passsword, name, surname, father_name, role, repeatPass} = this.state;
//         return(
            // <section>
            //     <form id="registration-form" class="form-container" method="post">
            //         <div class="logo">
            //             <a href="/home">Edukid</a>
            //         </div>
            //         <h1 class="form-title">Регистрация</h1>
            //         <div class="form-field">
            //             <div class="userType">
            //                 <img src=""/>
            //             </div>
            //         </div>
            //         <div class="form-field">
            //             <div class="form-field-title">Имя</div>
            //             <div class="form-field-input">
            //                 <img src=""/>
            //                 <input value={name} name="Имя" type="text" onChange={this.handleName}/>
            //             </div>
            //         </div>
            //         <div class="form-field">
            //             <div class="form-field-title">Фамилия</div>
            //             <div class="form-field-input">
            //                 <img src=""/>
            //                 <input value={surname} name="Фамилия" type="text" onChange={this.handleSurname}/>
            //             </div>
            //         </div>
            //         <div class="form-field">
            //             <div class="form-field-title">Отчество</div>
            //             <div class="form-field-input">
            //                 <img src=""/>
            //                 <input value={father_name} name="Отчество" type="text" onChange={this.handleFatherName}/>
            //             </div>
            //         </div>
            //                         <div class="form-field">
            //             <div class="form-field-title">Почта</div>
            //             <div class="form-field-input">
            //                 <img src=""/>
            //                 <input value={email} name="Почта" type="text" onChange={this.handleEmail}/>
            //             </div>
            //         </div>
            //         <div class="form-field">
            //             <div class="form-field-title">Пароль</div>
            //             <div class="form-field-input">
            //                 <img src=""/>
            //                 <input value={passsword} name="Пароль" onChange={this.handlePassword}/>
            //             </div>
            //         </div>
            //         <div class="form-field">
            //             <div class="form-field-title">Повторите пароль</div>
            //             <div class="form-field-input">
            //                 <img src=""/>
            //                 <input value={repeatPass} name="Повтор пароля" type="password" onChange={this.handleRepeatPass}/>
            //             </div>
            //         </div>
            //         <div class="sign-btn">
            //             <input class="submit-sign-form" type="submit" id="submitBtn" value="Зарегистрироваться" onClick={this.SubmitForm}/>
            //         </div>
            //         <div class="registration">
            //             <span>Уже есть учетная запись?</span><br/>
            //             <a href="/login">Войти</a>
            //         </div>
            //     </form>
            //     <button onClick={this.SubmitForm}>хуй</button>
            // </section>
//         )
//     }
// }
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
            axios.post("http://127.0.0.1:8000/api/user/", {
                name: register.name,    
                surname: register.surname,
                father_name: register.father_name,
                type_of_user: register.role,
                email: register.email,
                password: register.password,
                               
            }).then(res => {
                console.log(res)
                if (res.statusText === 'Created') {
                    window.location.href = "http://localhost:3000/login"
                } else {
                    alert("There is already a user with this email")
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
        }
    }
        return(
            <section>
                <form id="registration-form" class="form-container" method="post" onSubmit={submitChackin}>
                    <div class="logo">
                        <a href="/home">Edukid</a>
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
        )
    
}