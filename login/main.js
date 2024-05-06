// Get the video element
const video = document.getElementById('background-video');
const loopStartTime = 8; // Start time in seconds
const loopEndTime = 16; // End time in seconds

video.addEventListener('timeupdate', function() {
    if (video.currentTime >= loopEndTime) {
        video.currentTime = loopStartTime;
    }
});

// When the video ends, reset it to 8 seconds
video.addEventListener('ended', function() {
    // Set the currentTime to 8 seconds
    video.currentTime = 8;
    // Play the video
    video.play();
});
function redirectToCreate() {
    // Replace the href with your actual link for creating tokens
    window.location.href = "https://luxury-gumption-1bba55.netlify.app/"; 
}

function redirectToTransfer() {
    // Replace the href with your actual link for transferring tokens
    window.location.href = "https://venerable-lebkuchen-0e1a27.netlify.app/"; 
}

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to the buttons
    document.getElementById("createButton").addEventListener("click", redirectToCreate);
    document.getElementById("transferButton").addEventListener("click", redirectToTransfer);
});

