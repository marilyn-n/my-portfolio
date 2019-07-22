// selectors
const menu = document.querySelector('.menu');
const sticky = menu.offsetTop;

// functions
const stickyNavbar = () => {
    if (window.pageYOffset >= sticky) {
        menu.classList.add('sticky');
    }

    if (window.pageYOffset === 0) {
        menu.classList.remove('sticky');
    }
};

// hook up events
window.addEventListener('scroll', stickyNavbar)