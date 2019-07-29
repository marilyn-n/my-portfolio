// selectors
const nav = document.querySelector('.menu');
const contactMenu = document.querySelector('.get-in-contact');
const projectList = document.querySelector('.projects__list');
const slideShow = document.querySelector('.projects__carrousel');
const topOfNav = 122;

// functions
const fixNav = () => {
    if (window.scrollY >= topOfNav) {
        nav.classList.remove('d-none');
    }
    if (window.scrollY === 0) {
        nav.classList.add('d-none');
    }
};

const reportWindowSize = () => {
    if (window.innerWidth <= 980) {
        projectList.classList.add('d-none');
        slideShow.classList.remove('d-none');
    } else {
        projectList.classList.remove('d-none');
        slideShow.classList.add('d-none');
    }

};

// hook up events
window.addEventListener('scroll', fixNav)
window.addEventListener('resize', reportWindowSize);
window.onload = reportWindowSize();
// slideshow--------------------------------------------------------------------------------------

const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

// slideshow--------------------------------------------------------------------------------------