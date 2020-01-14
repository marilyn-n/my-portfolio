// selectors
const nav = document.querySelector('.menu');
const contactMenu = document.querySelector('.get-in-contact');
const projectList = document.querySelector('.projects__list');
const slideShow = document.querySelector('.projects__carrousel');
const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('dot');
const jobList = document.querySelector('.experience__jobs-list');
const jobDates = document.querySelectorAll('[data-date]');
const copyBtn = document.querySelector('.about-me__copy-to-clipboard__gmail--copy');
const switchBtn = document.querySelector('.switch-btn input[type="checkbox"]');
const html = document.querySelector('html');
const alert = document.querySelector('.tip-wrapper__tip');

const topOfNav = 122;

// functions
const fixNav = () => {
    if (window.scrollY >= topOfNav) {
        nav.style.opacity = 1;
        
    }
    if (window.scrollY === 0) {
        nav.style.opacity = 0;
    }
};

const reportWindowSize = () => {
    if (window.innerWidth <= 500) {
        projectList.classList.add('d-none');
        slideShow.classList.remove('d-none');
    } else {
        projectList.classList.remove('d-none');
        slideShow.classList.add('d-none');
    }

};

const sortByDate = () => {
    [...jobDates]
        .sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date))
        .forEach(job => {
            jobList.append(job);
        });
};

let slideIndex = 1;
const showSlides = (n) => {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    [...slides].map(slide => slide.style.display = 'none');
    [...dots].map(dot => dot.className = dot.className.replace(' active', ''));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
};

const currentSlide = (n) => showSlides(slideIndex = n);

const copyToClipboard = () => {
    const input = document.querySelector('input.email-to-clipboard');
    input.select();
    document.execCommand("copy");
}

function handleDarkMode() {
    this.checked ? html.classList.add('dark-mode') : html.classList.remove('dark-mode');
}

const showAlert = () => {
    alert.style.opacity = 1;
    alert.style.transition = 'opacity .25s ease-in-out';
    setTimeout(() => { 
        alert.style.opacity = 0;
    }, 2500);
}

// hook up events
window.addEventListener('scroll', fixNav);
window.addEventListener('resize', reportWindowSize);
window.onload = reportWindowSize();
window.onload = sortByDate();
window.onload = showSlides(slideIndex);
copyBtn.addEventListener('click', copyToClipboard);
copyBtn.addEventListener('click', showAlert);
switchBtn.addEventListener('change', handleDarkMode);