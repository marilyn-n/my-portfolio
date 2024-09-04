import { projects, skills, jobs } from "./data.js";
// selectors
const jobList = document.querySelector('.experience__jobs-list');
const jobDates = document.querySelectorAll('[data-date]');
let switchBtn = document.querySelector('label.switch-btn input[type="checkbox"]');
let switchWrapper = document.querySelector('label.switch-btn');
let switchLabelText = document.querySelector('label.switch-btn span.switch-btn__text');
const html = document.querySelector('HTML');
const skillsWrapper = document.querySelector('.skills__knowledge');
const projectsWrapper = document.querySelector('.projects .projects__list');
const cards = projectsWrapper.getElementsByClassName('a-card');
const mobileCarousel = document.getElementById("carouselMobileScreens");
const carouselInnerContainer = document.getElementsByClassName('mobile-carousel-inner')[0];

console.log(jobs);

const renderJobs = (jobsArray) => {
   const jobsHTML = jobsArray.map(job => {
        return `
            <div class="experience__job" id="${job.id}">
                <div>
                    <img class="experience__job--icon" src="${job.company.logoUrl}" alt="--" />
                </div>
                <div class="experience__job__body">
                    <div class="experience__job__header">
                        <span class="experience__job__header--title">${job.title}</span>
                        <div class="employment-details">
                            <span class="employment-details--location">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${job.location}</span>
                            </span>
                            <span class="employment-details--company">
                                <a target="_blank" href="${job.company.websiteUrl}">
                                    <i class="far fa-building"></i>
                                    <span>${job.company.name}</span>
                                </a>
                            </span>
                            <span class="employment-details--year">
                             ${job.tenure.startDate} to ${job.tenure.endDate}
                            </span>
                        </div>
                        ${job.skills.length 
                            ? `<div class="experience__job__stack">Skills: 
                                    ${job.skills.map(skill => {
                                        return `
                                            <div class="badge badge--clear-sky badge--bordered">
                                                <span>${skill}</span>
                                            </div>
                                        `
                                    }).join('')}
                                </div>`
                            : ''}
                        <p class="experience__job--description">${job.jobDescription}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    jobList.innerHTML = jobsHTML;
}

const renderProjects = (projectList) => {
    const isCarousel = window.innerWidth <= 768;
   
    const projectsHTML = projectList.map((project, index) => {
        const projectItem = `
            <div class="a-card ${isCarousel ? 'my-0 mx-auto' : ''}" ${!isCarousel ? `role="button" tabindex="0" data-toggle="modal" data-target="#exampleModalCenter"` : ''} id="${project.id}">
                <div class="a-card--wrapper">
                    <div class="a-card__header">
                        <div class="a-card__header--title">
                            <span class="title">
                                ${project.title}
                            </span>
                            <div class="badge" aria-hidden="true">
                                <span>${project.type}</span>
                            </div>
                        </div>
                        <img src="${project.thumbnail}"
                            class="a-card__header--graphic" 
                            alt=""
                            aria-labelledby="project-description-text"
                        />
                    </div>
                    <div class="a-card__body">
                        <p class="a-card__body--paragraph" name="project-description-text">
                             ${project.description}
                        </p>
                    </div>
                </div>
                <div class="a-card__actions">
                    <a class="ui-text-button ui-text-button--outlined demo" href="${project.demoLink}" target="_blank" role="button">
                        demo
                        <i class="fas fa-thin fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a class="ui-text-button source-code" href="${project.githubLink}" target="_blank" role="button">
                        source code
                        <i class="fas fa-thin fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        `;

        return isCarousel 
        ?`<div class="carousel-item ${index === 0 ? 'active' : ''}" data-interval="50000">
            ${projectItem}
        </div>`
        : projectItem;
      
    }).join("");

    if(isCarousel) {
        carouselInnerContainer.innerHTML = projectsHTML
    } else {
        mobileCarousel.classList.add('d-none');
        projectsWrapper.innerHTML = projectsHTML
    }
}

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

const sortByDate = () => {
    [...jobDates]
        .sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date))
        .forEach(job => {
            jobList.append(job);
        });
};

const loadDarkModeStorage = () => {
    const storedCheckboxValue = JSON.parse(localStorage.getItem('darkMode'));
    storedCheckboxValue ? html.classList.add('dark-mode') : html.classList.remove('dark-mode');

    switchBtn.checked = storedCheckboxValue;
    setAriaChecked(storedCheckboxValue);
    switchLabelText.textContent = `Turn night mode ${storedCheckboxValue ? 'off' : 'on'}`;
}

const darkModeHandler = (e) => {
    switchBtn.checked ? html.classList.add('dark-mode') : html.classList.remove('dark-mode');
    switchLabelText.textContent = `Turn night mode ${switchBtn.checked ? 'off' : 'on'}`    

    setAriaChecked(switchBtn.checked ? 'true' : 'false');

    if(e.key === 'Enter') {     
        setAriaChecked(switchBtn.checked ? 'true' : 'false');
        switchBtn.click();
    }

    // Storing the state of checkbox in localStorage
    localStorage.setItem('darkMode', JSON.stringify(switchBtn.checked));
};

// For a11y purposes: this code sets the aria-checked attribute of the switch element based on the checkbox value
const setAriaChecked = (value) => switchWrapper.setAttribute('aria-checked', value);

const a11yCards = (e) => {
    
    if(e.key === 'Enter') {
        e.target.click();
    }
}

const modal = (e) => {
    const target = e.target;
    const projectId = target.closest('.a-card').id;
    const project = projects.filter(el => el.id === parseInt(projectId))[0];
 
    if(project) {

        const modalDOM = {
            title: document.querySelector('#modalTitle'),
            details: document.querySelector('#modal__details'),
            innerCarrousel: document.querySelector('.carousel-inner'),
            demoBtn: document.querySelector('#demo-btn'),
            codeBtn: document.querySelector('#source-code-btn'),
            requirements: document.querySelector('.modal__body--requirements')
        }

        modalDOM.title.textContent = `${project.title}`;
        modalDOM.details.textContent = `${project.description}`;
        modalDOM.innerCarrousel.innerHTML = project.media
            .map((media, index) => {
                    return`
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${media.src}" id="modal--thumbnail" alt="carrousel-img">
                    </div>`;
            }).join(' ');

        modalDOM.demoBtn.setAttribute('href', `${project.demoLink}`);
        modalDOM.codeBtn.setAttribute('href', `${project.githubLink}`);

        modalDOM.requirements.innerHTML = project.stack
            .map((item) => `
                <div class="badge badge--clear-sky badge--bordered">
                    <span>${item}</span>
                </div>
                `
            ).join(' ');
    }

};

// hook up events
window.onload = sortByDate();
window.onload = skillsRender(skills);
window.onload = loadDarkModeStorage();
renderJobs(jobs);
renderProjects(projects);
switchBtn.addEventListener('change', darkModeHandler);
switchWrapper.addEventListener('keypress', darkModeHandler);
[...cards].map(item => item.addEventListener('click', modal));
[...cards].map(card => card.addEventListener('keypress', a11yCards));
