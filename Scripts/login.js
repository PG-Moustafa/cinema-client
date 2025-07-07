document.addEventListener("DOMContentLoaded", () => {
    
    const homePage = document.getElementById("homePage");
    homePage.addEventListener("click", () => {
        window.location.href = "../index.html";
    });

    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        const formData = buildLoginFormData(email, password);

        axios.post("http://localhost/cinema-project/cinema-server/login", formData)
            .then(response => {
                const data = response.data;

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
                const message = error?.response?.data?.error || "Login failed. Please try again.";
                alert(message);
                console.error("Login error:", error);
            });
    });

    function buildLoginFormData(email, password) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        return formData;
    }
});
