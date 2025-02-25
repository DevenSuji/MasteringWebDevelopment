// Random rotation for the cube
const cube = document.querySelector('.cube');

function getRandomRotation() {
    // Generate random rotation angles for X, Y, and Z axes (in degrees)
    const x = Math.floor(Math.random() * 360);
    const y = Math.floor(Math.random() * 360);
    const z = Math.floor(Math.random() * 360);
    return `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function rotateCube() {
    cube.style.transform = getRandomRotation();
    // Random interval between 2 and 5 seconds for the next rotation
    const randomTime = Math.random() * 3000 + 2000; // 2000–5000ms
    setTimeout(rotateCube, randomTime);
}

// Start the random rotation
rotateCube();