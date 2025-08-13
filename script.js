document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("wedding-video");
    const unmuteBtn = document.getElementById("unmute-btn");

    // Try autoplay muted
    video.muted = true;
    video.play().catch(() => {
        console.log("Autoplay blocked until user interacts.");
    });

    // Unmute on button click
    unmuteBtn.addEventListener("click", () => {
        video.muted = false;
        video.play();
        unmuteBtn.style.display = "none";
    });
});

// Set the date we're counting down to (YYYY, MM-1, DD, HH, MM, SS)
// Note: Months are 0-based in JavaScript (0 = January, 11 = December)
const countdownDate = new Date(2025, 7, 14, 3, 0, 0).getTime();

// Update the countdown every 1 second
const countdown = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countdownDate - now;
    
    // If the countdown is finished, stop it
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
        return;
    }
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
}, 1000);

