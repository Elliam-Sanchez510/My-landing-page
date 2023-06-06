const slider = document.querySelector('.slider');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;

function changeImage() {
    // Oculta la imagen actual
    images[currentIndex].classList.remove('active');

    // Incrementa el índice de la imagen actual
    currentIndex = (currentIndex + 1) % images.length;

    // Muestra la siguiente imagen
    images[currentIndex].classList.add('active');
}

// Cambia la imagen cada 2 segundos
setInterval(changeImage, 2000);
