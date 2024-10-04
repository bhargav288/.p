document.getElementById('surpriseBtn').addEventListener('click', () => {
    const balloonsContainer = document.getElementById('balloons');
    balloonsContainer.innerHTML = ''; // Clear previous balloons
    for (let i = 0; i < 20; i++) { // Increased the number of balloons
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Randoma size
        const size = Math.random() * 50 + 20; // Size between 20px and 70px
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;

        // Random position and animation duration
        const leftPosition = Math.random() * 100; // Position from 0% to 100%
        const animationDuration = Math.random() * 3 + 2; // Duration between 2s and 5s

        // Setting styles
        balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloon.style.left = `${leftPosition}%`;
        balloon.style.animationDuration = `${animationDuration}s`;

        // Add balloon to the container
        balloonsContainer.appendChild(balloon);
    }
});

