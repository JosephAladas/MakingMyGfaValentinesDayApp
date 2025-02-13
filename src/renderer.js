const path = require("path");

// Load the audio file correctly
let audio = new Audio(path.join(__dirname, "happy.mp3"));

// Play the song when the window loads
window.onload = () => {
    audio.play();
};

// Change song when a button is clicked
document.getElementById("change-song").addEventListener("click", () => {
    audio.pause(); // Stop current song
    audio.currentTime = 0; // Reset time
    audio = new Audio(path.join(__dirname, "victory.mp3")); // Load new song
    audio.play();
});
