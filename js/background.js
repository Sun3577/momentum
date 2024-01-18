const images = [
    "0.jpeg", "1.jpg", "2.jpeg", "3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);