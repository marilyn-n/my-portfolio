// selectors
const nav = document.querySelector('.menu');
const contactMenu = document.querySelector('.get-in-contact');
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

// hook up events
window.addEventListener('scroll', fixNav)