import { projects, skills, jobs } from "./data.js";
const jobList = document.querySelector('.experience__jobs-list');
let switchBtn = document.querySelector('label.switch-btn input[type="checkbox"]');
let switchWrapper = document.querySelector('label.switch-btn');
let switchLabelText = document.querySelector('label.switch-btn span.switch-btn__text');
const html = document.querySelector('HTML');
const skillsWrapper = document.querySelector('.skills__knowledge');
const projectsWrapper = document.querySelector('.projects .projects__list');
const cards = projectsWrapper.getElementsByClassName('a-card');
const mobileCarousel = document.getElementById("carouselExampleInterval");
const carouselInnerContainer = document.getElementsByClassName('mobile-carousel-inner')[0];
const carouselTotalItemsLabel = document.getElementsByClassName('carousel-total-items')[0];

const isMobile = window.innerWidth <= 768;

const renderJobs = (jobsArray) => {
   const jobsHTML = jobsArray.map(job => {
    return `
        <div class="job">
            <div class="job__header">
                <img class="job__logo" src="${job.company.logoUrl}" />
                <div class="job__company">
                    <p class="job__position">
                        ${job.title} at
                        <a href="${job.company.websiteUrl}" class="job__company-name">${job.company.name}</a>
                    </p>
                    <div class="job__details">
                        <div class="job__location">
                            <span>${job.location}</span>
                        </div>
                        <div class="job__duration">
                            <span>${job.tenure.startDate} - ${job.tenure.endDate}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="job__body">
                <p class="job__description">
                    ${job.jobDescription}
                </p>
                <div class="job__skills">
                    ${job.skills.map(skill => {
                        return `
                        <div class="pill pill--clear-sky">
                            <span>${skill}</span>
                        </div>`
                    }).join('')}
                </div> 
                <div class="accordion" id="accordionPanelsStayOpenExample">
                ${job.clients && job.clients.length ? 
                    job.clients.map((client, index) => {
                        return `
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-heading${client.clientId}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${client.clientId}" aria-expanded="false" aria-controls="collapse${client.clientId}">
                                    <div class="client mb-3" data-client-id="${client.clientId}">
                                        <div class="client__header">
                                        <img class="client__logo" src="${client.company.logoUrl}" alt="" />
                                        <div class="client__company">
                                            <div class="client__position">
                                                ${client.title} at <a class="client__client-name" href="${client.company.websiteUrl}">${client.company.name}</a>
                                            </div>
                                            <div class="client__details">
                                                <div class="client__location">
                                                    <span>Remote</span>
                                                </div>
                                                <div class="client__duration">
                                                    <span>${client.tenure.startDate} - ${client.tenure.endDate}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse${client.clientId}" class="accordion-collapse collapse" aria-labelledby="heading${client.clientId}">
                                <div class="accordion-body">
                                    <p class="experience__job--description">
                                        ${client.jobDescription}
                                    </p>
                                    ${client.skills.length 
                                        ? `<div class="experience__job__stack">Skills: 
                                                ${client.skills.map(s => {
                                                    return `
                                                        <div class="pill pill--clear-sky">
                                                            <span>${s}</span>
                                                        </div>
                                                    `
                                                }).join('')}
                                            </div>`
                                        : ''
                                    }
                                </div>                     
                            </div>
                        </div>
                        `
                    }).join('')
                : ''}
                </div>
            </div>
        </div>
    `
    }).join('');

    jobList.innerHTML = jobsHTML;
}

const renderProjects = (projectList) => {
    const projectsHTML = projectList.map((project, index) => {
        const projectItem = `
            <div class="a-card ${isMobile ? 'my-0 mx-auto' : ''}" ${!isMobile ? `role="button" tabindex="0" data-toggle="modal" data-target="#exampleModalCenter"` : ''} id="${project.id}">
                <div class="a-card--wrapper">
                    <div class="a-card__header">
                        <div class="a-card__header--title">
                            <span class="title">
                                ${project.title}
                            </span>
                            <div class="pill pill--clear-sky" aria-hidden="true">
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

        return isMobile 
        ? `
            <div class="carousel-item ${index === 0 ? 'active' : ''}" data-bs-interval="50000" data-item=${index + 1}>
                ${projectItem}
            </div>
        `
        : projectItem;
      
    }).join("");

    if(isMobile) {
        carouselInnerContainer.innerHTML = projectsHTML
        const currentCardIndex = document.querySelector('.carousel-item.active').dataset.item;
        carouselTotalItemsLabel.textContent = `${currentCardIndex} / ${projectList.length}`
    } else {
        mobileCarousel.classList.add('d-none');
        projectsWrapper.innerHTML = projectsHTML
    }
}

const skillsRender = (skillsArr) => {
    const skills = skillsArr.map((skill => {
        return `
            <div class="pill pill--clear-sky">
                <span>${skill}</span>
            </div>
        `;
    })).join(' ');
    skillsWrapper.innerHTML = skills;
}

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
                <div class="pill pill--clear-sky">
                    <span>${item}</span>
                </div>
                `
            ).join(' ');
    }

};

window.onload = skillsRender(skills);
window.onload = loadDarkModeStorage();
renderJobs(jobs);
renderProjects(projects);
switchBtn.addEventListener('change', darkModeHandler);
switchWrapper.addEventListener('keypress', darkModeHandler);
[...cards].map(item => item.addEventListener('click', modal));
[...cards].map(card => card.addEventListener('keypress', a11yCards));
