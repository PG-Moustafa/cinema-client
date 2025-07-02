
document.addEventListener("DOMContentLoaded", () => {
    const adminBtn = document.getElementById("admin-btn");
    

    adminBtn.addEventListener("click", () => {
        window.location.href = "./dashboard.html";
    });

    // show users in the table
    let users = '';

    axios.get("http://localhost/cinema%20pr/cinema-server/controllers/UserController.php")
    .then(response => {
        users = response.data;
        console.log(users);
        showUsers(users);

        function showUsers(users) {
            const userTable = document.getElementById("userTable");

            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.birthdate}</td>
                `;
                userTable.appendChild(row);
                console.log("Users uploaded successfully to the table.");
            }
        }

    })
    .catch(error => {
        console.log(error);
    });

    const addUserBtn = document.getElementById("addUserBtn");
    addUserBtn.addEventListener("click", () => {
        window.location.href = "../../Pages/Admin/addUser.html";
    });

});