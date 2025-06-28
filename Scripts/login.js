

// Go home page
const homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {
    window.location.href = "../index.html";})

// login submit
document.getElementById("loginForm").addEventListener("submit", function() {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" && password === "") {
        sessionStorage.setItem("loggedInUser", email);
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password");
    }
});

//
axios.get("http://localhost/cinema%20pr/cinema-server/controllers/MovieController.php")
  .then(response => {
    
    console.log("All Movies:", response.data);
    // render them in your HTML
  })
  .catch(error => {
    console.error("Error fetching movies:", error);
  });




