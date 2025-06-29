const homePage = document.getElementById("homePage");

homePage.addEventListener("click", () => {
    window.location.href = "../index.html";})

alert("Hello from register page");

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        password: document.getElementById("password").value,
        birthdate: document.getElementById("birthdate").value
    };

    //
    console.log("hello test");

    axios.post("http://localhost/cinema%20pr/cinema-server/controllers/register.php", 
        data)
        .then(response => {
            alert("Registration successful!");
            window.location.href = "login.html";
        })
        .catch(error => {
            alert(error.response?.data?.error || "Registration failed");
            console.error("Register error:", error);
        });
});
        