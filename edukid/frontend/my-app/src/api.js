import { json } from "react-router";
import {server} from "./server"
import jwtDecode from 'jwt-decode';

export function saveToken(token){
    localStorage.setItem('tokenTime', new Date().getTime() + 3500*1000)
    localStorage.setItem('tokenData', JSON.stringify(token));
    
}

function getExpTime(token){
    
    const date = new Date(0)
    date.setUTCSeconds(localStorage.tokenTime)
    return date
}

function isTokenValid(token){
    fetch(server()+"api/token/verify/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token : token
        })
    }).then((response) => {
        if (response.status == 200){
            return true
        }
        else{
            return false
        }

    })
}
function isTokenExp(token){
    const expirationDate = getExpTime(token)
    if(!expirationDate){
        return null
    }
    return expirationDate<new Date()
}


export function getTokenData(logindata){
    return fetch(server() + 'api/token/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email : logindata.email,
            password : logindata.password,
        })
    })
    .then((response) => response.json())
    .then((data) => saveToken(data))
        // .then((res) => {
        //     if (res.status===200) {
        //         // var tokenData
        //         // const kostil = res.json()
        //         const tokenData = res.json();
        //         console.log(data.access)
        //         saveToken(JSON.stringify(tokenData));
        //         return Promise.resolve()
        //     }
        //     return Promise.resolve();
        // });
}

// export function getTokenData(login, passsword){
//     return fetch(server() + 'api/token', {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//             'Accept': '/',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             login, 
//             passsword,
//         }),
//     })
//         .then((res) => {
//             if (res.status===200) {
//                 const tokenData = res.json();
//                 saveToken(JSON.stringify(tokenData));
//                 return Promise.resolve()
//             }
//             return Promise.resolve();
//         });
// }

export function checkAuth(){
    if (!localStorage.tokenData| localStorage.tokenData=="undefined" ){
        
        return false
    }
    
    return true
}

export function refreshToken(token){
    console.log("huy")
    return fetch(server()+'api/token/refresh/',{
        method: 'POST',
        credentials: "include",
        headers:{
            "Accept": "/",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
    const token = data
    saveToken(token)
    })
        // .then((res) => {
        //     if (res.status === 200){
        //         const tokenData = res.json();
        //         saveToken(JSON.stringify(tokenData));
        //         return Promise.resolve();
        //     }
        //     return Promise.reject();
        // })
}

export async function getUserData(){
    const response = await fetchWithAuth("api/user", {method: 'GET',})
    const data =  await response.json()       
    localStorage.setItem('userData', JSON.stringify(await data))
    return 
    
    // fetchWithAuth("api/user", {method: 'GET',}).then(response =>{
    //     return response.json()       
    // })
    // .then(data=>{
    //     localStorage.setItem('userData', JSON.stringify(data))
    //     return JSON.parse( localStorage.userData)
    // })
    
}

export async function fetchWithAuth(url, options) {
    
    const loginUrl = '/login'; // url страницы для авторизации
    let tokenData = null; // объявляем локальную переменную tokenData

    if (localStorage.tokenData) { // если в sessionStorage присутствует tokenData, то берем её
        tokenData = JSON.parse(localStorage.tokenData);
 
    } else {
        // return window.location.replace(loginUrl); // если токен отсутствует, то перенаправляем пользователя на страницу авторизации
    }

    if (!options.headers) { // если в запросе отсутствует headers, то задаем их
        options.headers = {};
    }
    
    if (tokenData) {
        if (isTokenValid(tokenData.access)) { // проверяем не истек ли срок жизни токена
            try {
                const newToken = await refreshToken(tokenData.refresh); // если истек, то обновляем токен с помощью refresh_token
                saveToken(newToken);
            } catch  { // если тут что-то пошло не так, то перенаправляем пользователя на страницу авторизации
                return  window.location.replace(loginUrl);
            }
        }

        options.headers.Authorization = `Bearer ${tokenData.access}`; // добавляем токен в headers запроса
    }
    return fetch(server()+url, options); // возвращаем изначальную функцию, но уже с валидным токеном в headers
}
export async function getUserClass(){
    const response = await fetchWithAuth("api/v1/Classes/",  {method: 'GET',})
    const data = await response.json()       
    localStorage.setItem('userClasses', JSON.stringify(await data))
    return 
}
export async function getUserSubjects(){
    const response = await fetchWithAuth("api/v1/Subject/",  {method: 'GET',})
    const data = await response.json()       
    localStorage.setItem('userSubjects', JSON.stringify(await data))
    return 
}
export async function getUserHomeworks(){
    const response = await fetchWithAuth("api/v1/Homework/",  {method: 'GET',})
    const data = await response.json()       
    localStorage.setItem('userHomeworks', JSON.stringify(await data))
    return 
}