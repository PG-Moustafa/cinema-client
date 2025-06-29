document.addEventListener("DOMContentLoaded", () => {

    // go to home page
    const homePage = document.getElementById("homePage");
    homePage.addEventListener("click", () => {
        window.location.href = "../index.html";})

    const seatsContainer = document.getElementById("seatsContainer");
    const selectedSeat = document.getElementById("selectedSeat");
    const confirmBtn = document.getElementById("confirmBooking");

    const rows = 9;
    const cols = 12;

    let selected = null;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");

            seat.addEventListener("click", () => {
                document.querySelectorAll(".seat.selected").forEach(s => s.classList.remove("selected"));
                seat.classList.add("selected");
            });

            seatsContainer.appendChild(seat);
        }
    }

    confirmBtn.addEventListener("click", () => {
        if (!selected) {
            alert("Please select a seat first.");
            return;
        }
        alert(`Seat ${selected} booked successfully!`);
    });
});
