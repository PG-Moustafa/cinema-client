const homePage = document.getElementById("homePage");
const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");

homePage.addEventListener("click", () => {
    window.location.href = "../index.html";
})

loginPage.addEventListener("click", () => {
    window.location.href = "./Pages/login.html";
})

registerPage.addEventListener("click", () => {
    window.location.href = "./Pages/register.html";
})
