const cube = document.querySelector('.cube');

function getRandomRotation() {
    const x = Math.floor(Math.random() * 360);
    const y = Math.floor(Math.random() * 360);
    const z = Math.floor(Math.random() * 360);
    return `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function rotateCube() {
    cube.style.transform = getRandomRotation();
    const randomTime = Math.random() * 3000 + 2000;
    setTimeout(rotateCube, randomTime);
}

rotateCube();