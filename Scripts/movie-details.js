document.addEventListener("DOMContentLoaded", () => {

    // go to home page
    const homePage = document.getElementById("homePage");
    homePage.addEventListener("click", () => {
        window.location.href = "../index.html";})

    const Id = localStorage.getItem("selected-movie");
    const movieId = parseInt(Id);

    // show movie details
    const container = document.getElementById("movieDetailsContainer");

    if (!movieId) {
        container.innerHTML = "<p>No movie selected.</p>";
        return;
    }

    axios.get(`http://localhost/cinema%20pr/cinema-server/controllers/MovieController.php?id=${movieId}`)
    .then(response => {
        const movie = response.data;
        container.innerHTML = `
        <div class="movie-details-card">
            <div class="title-img-container">
                <h1>${movie.title}</h1>
                <img src="${movie.poster_url}" alt="${movie.title}" />
            </div>
            <div class="description">
                <p><strong>Description:</strong> ${movie.description}</p>
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <button id="bookBtn" class="book-btn" >Book</button>
            </div>
        </div>
        `;
        console.log(movie);

        // booking a movie
        const bookBtn = document.getElementById("bookBtn");
        bookBtn.addEventListener("click", () => {

            const userId = sessionStorage.getItem("loggedInUser");
            console.log(userId);

            if (!userId) {
                alert("You are not logged in!");
            }

            localStorage.setItem("selected-movie", movieId);
            window.location.href = "./booking.html";

        });

    })
    .catch(error => {
        console.error("Failed to fetch movie: ", error);
        container.innerHTML = "<p>Failed to load movie details.</p>";
    })

    


});