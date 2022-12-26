window.addEventListener("DOMContentLoaded", event => {

    const signBtn = document.getElementById("sign-btn")
    const clickSignBtn = function () {
        window.location.href = "/sign-up"
        }

    signBtn.onclick = clickSignBtn;

    let burger = document.getElementById("burger")
    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
    })

})