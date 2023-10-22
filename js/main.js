// selectors
const projectList = document.querySelector('.projects__list');
const mobileCarousel = document.querySelector('.mobile-carousel');
const jobList = document.querySelector('.experience__jobs-list');
const jobDates = document.querySelectorAll('[data-date]');
let switchBtn = document.querySelector('label.switch-btn input[type="checkbox"]');
const html = document.querySelector('HTML');
const cardHeaders = document.querySelectorAll('.a-card--wrapper');

const skillsWrapper = document.querySelector('.skills__knowledge');
const mySkills = [
    'Object-Oriented Programming (OOP)',
    'JavaScript',
    'Node.js',
    'Testing with Jest',
    'Version Control System',
    'Bash',
    'Developer Tools',
    'Template Engines',
    'Web Performance Optimization',
    'JavaScript Frameworks',
    'Component Libraries',
    'Component Testing',
    'Hooks',
    'Responsive Design with Flexbox & Grid',
    'CSS Preprocessors',
    'BEM',
    'CSS Animations',
    'Amazon Web Services',
];

const skillsRender = (skillsArr) => {

    const skills = skillsArr.map((skill => {
        return `
            <div class="badge badge--clear-sky badge--bordered">
                <span>${skill}</span>
            </div>
        `;
    })).join(' ');
    
    skillsWrapper.innerHTML = skills;

}

// functions
const reportWindowSize = () => {
    if (window.innerWidth <= 768) {
        projectList.classList.add('d-none');
        mobileCarousel.classList.remove('d-none');
    } else {
        projectList.classList.remove('d-none');
        mobileCarousel.classList.add('d-none');
    }
};

const sortByDate = () => {
    [...jobDates]
        .sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date))
        .forEach(job => {
            jobList.append(job);
        });
};

const loadDarkMode = () => {
    const checkboxValue = JSON.parse(localStorage.getItem('checkbox'))
    switchBtn.checked = checkboxValue ? checkboxValue : false

    checkboxValue ? html.classList.add('dark-mode') : html.classList.remove('dark-mode')
}

function darkModeHandler() {
    this.checked ? html.classList.add('dark-mode') : html.classList.remove('dark-mode')
    localStorage.setItem('checkbox', JSON.stringify(this.checked))
};


function modal() {
    const cardElement = this.parentElement;
    const cardTitle = cardElement.querySelector('.a-card__body--title span.title');
    const cardTools = cardElement.querySelector('.a-card__body--title span.title').dataset.tools.split(',');
    const cardDetails = cardElement.querySelector('.a-card__body--paragraph').textContent;
    const cardMedia = cardElement.querySelector('.a-card__header--graphic').dataset.media.split(',');
    const cardDemoBtn = cardElement.querySelector('.a-card__actions .demo');
    const cardSourceCodeBtn = cardElement.querySelector('.a-card__actions .source-code');
    
    const modalDOM = {
        title: document.querySelector('#modalTitle'),
        details: document.querySelector('#modal__details'),
        innerCarrousel: document.querySelector('.carousel-inner'),
        demoBtn: document.querySelector('#demo-btn'),
        codeBtn: document.querySelector('#source-code-btn'),
        requirements: document.querySelector('.modal__body--requirements')
    }

    modalDOM.title.textContent = `${cardTitle.dataset.title}`;
    modalDOM.details.textContent = `${cardDetails}`;

    modalDOM.innerCarrousel.innerHTML = cardMedia
        .map((media, index) => {
            if(index === 0) {
                return`
                <div class="carousel-item active">
                    <img src="${media}" id="modal--thumbnail" alt="carrousel-img">
                </div>`;
            } else {
                return`
                <div class="carousel-item">
                    <img src="${media}" id="modal--thumbnail" alt="carrousel-img">
                </div>`;
            }
        }).join(' ');

    modalDOM.demoBtn.setAttribute('href', `${cardDemoBtn.dataset.demoUrl}`);
    modalDOM.codeBtn.setAttribute('href', `${cardSourceCodeBtn.dataset.sourceCode}`);

    modalDOM.requirements.innerHTML = cardTools
        .map((item) => `
            <div class="badge badge--clear-sky badge--bordered">
                <span>${item}</span>
            </div>
            `
        ).join(' ')
};

// hook up events
window.addEventListener('resize', reportWindowSize);
window.onload = reportWindowSize();
window.onload = sortByDate();
window.onload = skillsRender(mySkills);
window.onload = loadDarkMode()
switchBtn.addEventListener('change', darkModeHandler);
[...cardHeaders].map(item => item.addEventListener('click', modal));