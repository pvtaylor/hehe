// Set the timer for 2 hours (in seconds)
let breakTime = 2 * 60 * 60; // 2 hours in seconds
let timerDisplay = document.getElementById("timer");
let dismissButton = document.getElementById("dismiss-button");

function startTimer() {
    let countdown = setInterval(function () {
        let hours = Math.floor(breakTime / 3600);
        let minutes = Math.floor((breakTime % 3600) / 60);
        let seconds = breakTime % 60;

        // Format time as HH:MM:SS
        timerDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

        breakTime--;

        // When timer reaches 0, show reminder and reset timer
        if (breakTime < 0) {
            clearInterval(countdown);
            alert("It's time to take a study break!");
            breakTime = 2 * 60 * 60; // Reset timer to 2 hours
            startTimer(); // Restart timer
        }
    }, 1000);
}

function padZero(time) {
    return time < 10 ? "0" + time : time;
}

dismissButton.addEventListener("click", function () {
    alert("Good job! Take a break!");
    breakTime = 2 * 60 * 60; // Reset timer when user dismisses the reminder
    startTimer(); // Restart timer after dismissing
});

// Start the timer when the page loads
startTimer();
