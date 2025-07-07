
document.addEventListener("DOMContentLoaded", () => {

    const homePage = document.getElementById("homePage");

    homePage.addEventListener("click", () => {
        window.location.href = "../index.html";})

    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", document.getElementById("name").value.trim());
        formData.append("email", document.getElementById("email").value.trim());
        formData.append("phone", document.getElementById("phone").value.trim());
        formData.append("password_hash", document.getElementById("password").value);
        formData.append("birthdate", document.getElementById("birthdate").value);


        axios.post("http://localhost/cinema-project/cinema-server/register", 
            formData)
            .then(response => {
                alert("Registration successful!");
                window.location.href = "login.html";
            })
            .catch(error => {
                alert(error.response?.data?.error || "Registration failed");
                console.error("Register error:", error);
            });
    });

}); 