
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("addUserForm").addEventListener("submit", function(e) {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone : document.getElementById("phone").value.trim(),
            password : document.getElementById("password").value,
            birthdate : document.getElementById("birthdate").value
        };
        
        axios.post("http://localhost/cinema%20pr/cinema-server/controllers/Register.php", 
            data)
        .then(response => {
            alert("User add successfully.");
            document.location.href = "./../../Pages/Admin/users-dashboard.html";
        })
        .catch(erro => {
            alert("Unable to register.")
            console.log(error);
        });

    });


});