const images = ["1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg"];

const choseImage = images[Math.floor(Math.random () * images.length)];


const Image = document.createElement("img");

Image.src = `img/${choseImage}`

document.body.appendChild(Image);

//apend is at the end
//prepend is at the top