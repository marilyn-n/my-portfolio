// selectors
const menu = document.querySelector('.menu');
const sticky = menu.offsetTop;

// functions
const stickyNavbar = () => {
    if (window.pageYOffset >= sticky) {
        menu.classList.remove('d-none');
    }

    if (window.pageYOffset === 0) {
        menu.classList.add('d-none');
    }
};

// hook up events
window.addEventListener('scroll', stickyNavbar)