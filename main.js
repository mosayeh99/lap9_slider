let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let activeBullet = document.querySelector('.slider-bullets .active');

let slideIndex = 2;
let slidePosition = 405;
let bulletPosition = 30;

leftArrow.onclick = () => {
    if (slidePosition != 675) {
        slideIndex--;
        slidePosition += 270;
        bulletPosition -= 30;
        slider.style.left = `${slidePosition}px`;
        activeBullet.style.left = `${bulletPosition}px`;
        activeSlide();
    }
}

rightArrow.onclick = () => {
    if (slidePosition != -675) {
        slideIndex++;
        slidePosition -= 270;
        bulletPosition += 30;
        slider.style.left = `${slidePosition}px`;
        activeBullet.style.left = `${bulletPosition}px`;
        activeSlide();
    }
}

function activeSlide() {
    slides.forEach((e) => {
        e.classList.remove('active');
        if (e.dataset.index == slideIndex) {
            e.classList.add('active');
        }
    })
}


