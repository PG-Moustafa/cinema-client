

document.addEventListener("DOMContentLoaded", () => {

    // go to home page
    const homePage = document.getElementById("homePage");
    homePage.addEventListener("click", () => {
        window.location.href = "../index.html";})
    
    
    // check if user logged 
    const userJSON = sessionStorage.getItem("loggedInUser");
    
    if (userJSON) {
        const user = JSON.parse(userJSON);
        
        // debugging
        console.log(user);

        // Pre-fill the form
        document.getElementById("name").value = user.name || "";
        document.getElementById("email").value = user.email || "";
        document.getElementById("phone").value = user.phone || "";
        document.getElementById("birthdate").value = user.birthdate || "";
    
        // handle updte
        const updateBtn = document.getElementById("updateBtn");
        updateBtn.addEventListener("click", () => {
            const updatedUser = {
                ...user,
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                birthdate: document.getElementById("birthdate").value
              };

              // Save updated data
            sessionStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

            const formData = new FormData();
            formData.append("id", updatedUser.id);
            formData.append("name", updatedUser.name);
            formData.append("email", updatedUser.email);
            formData.append("phone", updatedUser.phone);
            formData.append("birthdate", updatedUser.birthdate);
            formData.append("password_hash", user.password_hash || "");
      
            

            axios.post("http://localhost/cinema%20pr/cinema-server/controllers/UserController.php", formData)
            .then(response => {
                alert("Profile updated successfully!");
            })
            .catch(error => {
                console.error("Failed to update user:", error);
                alert("Failed to update profile on server.");
            });
          });
        
    }

    // logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "../index.html";
      });

});





