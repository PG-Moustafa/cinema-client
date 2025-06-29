
document.addEventListener("DOMContentLoaded", () => {
        
    // go to home page
    const homePage = document.getElementById("homePage");
    homePage.addEventListener("click", () => {
        window.location.href = "../index.html";})

    // login handling
    document.getElementById("loginForm").addEventListener("submit", function(e) 
    {
        e.preventDefault(); 
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        axios.post("http://localhost/cinema%20pr/cinema-server/controllers/login.php", {
            email,
            password
        })
        .then(response => {
            const data = response.data;

            console.log("success");
            
            sessionStorage.setItem("loggedInUser", JSON.stringify({
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                birthdate: data.birthdate,
            }));
            window.location.href = "../index.html";
        })
        .catch(error => {
            if (error.response && error.response.data) {
                alert(error.response.data.error);
            } else {
                alert("Login failed. Please try again.");
            }
            console.error("Login error:", error);
        });
    });


    



});