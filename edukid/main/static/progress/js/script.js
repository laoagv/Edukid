window.addEventListener("DOMContentLoaded", event => {

    // const signBtn = document.getElementById("sign-btn")
    // const clickSignBtn = function () {
    //     window.location.href = "http://localhost:3000/"
    //     }

    // signBtn.onclick = clickSignBtn;

    let burger = document.getElementById("burger")
    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
    })
    const classBtn = document.getElementById("class-btn")
    classBtn.addEventListener("click", function(){
        classBtn.parentElement.classList.toggle("active")
    })

})