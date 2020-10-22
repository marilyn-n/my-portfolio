// selectors
const projectList = document.querySelector('.projects__list');
const mobileCarousel = document.querySelector('.mobile-carousel');
const jobList = document.querySelector('.experience__jobs-list');
const jobDates = document.querySelectorAll('[data-date]');
const switchBtn = document.querySelector('label.switch-btn input[type="checkbox"]');
const html = document.querySelector('HTML');
const cardHeaders = document.querySelectorAll('.a-card--wrapper');

const skillsWrapper = document.querySelector('.skills__knowledge');
const mySkills = [
    'Object-Oriented Programming (OOP)',
    'Problem Solving',
    'Wireframe reading',
    'Attention to detail',
    'Reusable components',
    'CSS Preprocessors',
    'Responsive Web Design',
    'Cross-browser compatibility',
    'User Interface',
    'Single Page Applications',
    'Template engine',
    'CSS Media Queries',
    'CSS Animations',
    'JavaScript Frameworks',
    'CSS Frameworks',
    'Version Control/Git',
    'Browser Developer Tools',
    'Command line',
    'Web Performance Optimization',
    'Figma',
    'Adobe XD'
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

function handleDarkMode() {
    this.checked ? html.classList.add('dark-mode') : html.classList.remove('dark-mode');
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
switchBtn.addEventListener('change', handleDarkMode);
[...cardHeaders].map(item => item.addEventListener('click', modal));