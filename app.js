// Screen loader with delay and slide-out animation
function loader() {
    window.addEventListener("load", function() {
        const loader = document.getElementById("loader");

        if (loader) { // Check if loader element exists
            setTimeout(function() {
                loader.classList.add('slide-out'); // Add class to trigger slide-out animation
                setTimeout(function() {
                    loader.style.display = "none"; // Hide loader after animation
                }, 3000); // Match this duration with the slide-out animation duration
            }, 3000); // Delay in milliseconds (e.g., 2000 ms = 2 seconds)
        }
    });
}

// Call the loader function to ensure it runs
loader();



// Experience counter

function experienceCounter() {
    const experienceDate = new Date(2024, 4, 10);
    const currentDate = new Date();
    const experience = Math.floor((currentDate - experienceDate) / (1000 * 60 * 60 * 24 * 30)); // Calculate months
    const experienceElement = document.getElementById("professional-experience");
    experienceElement.textContent = `Experience: ${experience} months`;
}

experienceCounter();