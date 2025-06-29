
document.addEventListener("DOMContentLoaded", () => {

    const homePage = document.getElementById("homePage");
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    const profilePage = document.getElementById("profilePage");

    homePage.addEventListener("click", () => {
        window.location.href = "./index.html";
    })

    loginPage.addEventListener("click", () => {
        window.location.href = "./Pages/login.html";
    })

    registerPage.addEventListener("click", () => {
        window.location.href = "./Pages/register.html";
    })

    profilePage.addEventListener("click", () => {
        window.location.href = "./Pages/profile.html";
    })

    // get user from session
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // check if logged in
    if (user && user.name) {
        const welcomeMsg = document.getElementById("welcomeMsg");
        welcomeMsg.textContent = `Welcome, ${user.name}! 🎬`;

        const loginBtns = document.getElementsByClassName("button1");
        for (let btn of loginBtns) {
            btn.style.display = "none";
        }
    }

    let currentPage = 1;
    const moviesPerPage = 10;
    let movies = [];

    // show movies
    axios.get("http://localhost/cinema%20pr/cinema-server/controllers/MovieController.php")
        .then(response => {
            movies = response.data;
            renderMovies();
            //
        })
        .catch(error => {
            console.error("Error fetching movies:", error);
        });

        document.getElementById("prevPage").addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderMovies();
            }
        });

        document.getElementById("nextPage").addEventListener("click", () => {
                currentPage++;
                renderMovies();
        });


    // will render x movies depends on the current page number
    function renderMovies() {
        const container = document.getElementById("movieContainer");
        container.innerHTML = "";

        const start = (currentPage - 1) * moviesPerPage;
        const end = start + moviesPerPage;
        const pageMovies = movies.slice(start, end);

        pageMovies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";
            movieCard.dataset.id = movie.id;

            movieCard.innerHTML = `
                <img src="${movie.poster_url}" alt="${movie.title}" />
                <h3> ${movie.title} </h3>
                <p> ${movie.description} </p>
            `;

            movieCard.addEventListener("click", () => {
                localStorage.setItem("selected-movie", movie.id);
                window.location.href = "./Pages/movie-details.html";
            });

            container.appendChild(movieCard);
        });

        document.getElementById("pageIndicator").textContent = `Page ${currentPage}`;

    }

    // burger menu for tablet and mobile
    const burgerMenu = document.getElementById("burgerMenu");
    const headerLinks = document.querySelector(".header-links");
    
    burgerMenu.addEventListener("click", () => {
        headerLinks.classList.toggle("show");
    });

    

});

