window.addEventListener("DOMContentLoaded", event => {
    const name = document.getElementById("name")
    const surname = document.getElementById("surname")
    const father_name = document.getElementById("fathers_name")
    // const type_of_user = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const formValue = {
        name:"asdasd",
        surname:"asdasd",
        father_name:"asdasd",
        type_of_user:"Ученик",
        email:"laoagvik@gmail.com",
        password:"asdasdasd"
    }
    name.addEventListener("change", (e) => formValue.name=e.target.value)
    surname.addEventListener("change", (e) => formValue.surname=e.target.value)
    father_name.addEventListener("change", (e) => formValue.father_name=e.target.value)
    email.addEventListener("change", (e) => formValue.email=e.target.value)
    password.addEventListener("change", (e) => formValue.password=e.target.value)
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener("click",  async function(e) {
        console.log("Артем хуй соси")
        e.preventDefault()
        await CreatePostRequest();
    })
    function CreatePostRequest(){
        return fetch("http://localhost:8000/api/Users/",{
            method: 'POST',
            body: JSON.stringify(formValue),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((res) => res.json())
        .then((post) => formValue.push(post))
    }
})