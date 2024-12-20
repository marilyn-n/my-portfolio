import { projects } from "./data.js";

const mobileCarousel = document.getElementById("carouselExampleInterval");
const carouselInnerContainer = document.getElementsByClassName(
  "mobile-carousel-inner"
)[0];
const projectsWrapper = document.querySelector(".projects .projects__list");
const cards = projectsWrapper.getElementsByClassName("a-card");
const carouselTotalItemsLabel = document.getElementsByClassName(
  "carousel-total-items"
)[0];
const projectsCarousel = document.getElementById("carouselExampleInterval");

export const renderProjects = () => {
  const isMobile = window.innerWidth <= 768;

  const projectsHTML = projects
    .map((project, index) => {
      const projectItem = `
        <div 
            class="a-card ${isMobile ? "my-0 mx-auto" : ""}" 
            ${
              !isMobile
                ? `role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"`
                : ""
            } 
            id="${project.id}"
        >
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
                <a class="ui-text-button ui-text-button--outlined demo" href="${
                  project.demoLink
                }" target="_blank" role="button">
                    demo
                    <i class="fas fa-thin fa-arrow-right" aria-hidden="true"></i>
                </a>
                <a class="ui-text-button source-code" href="${
                  project.githubLink
                }" target="_blank" role="button">
                    source code
                    <i class="fas fa-thin fa-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    `;

      return isMobile
        ? `
        <div class="carousel-item ${
          index === 0 ? "active" : ""
        }" data-bs-interval="5000" data-item=${index + 1}>
            ${projectItem}
        </div>
    `
        : projectItem;
    })
    .join("");

  if (isMobile) {
    carouselInnerContainer.innerHTML = projectsHTML;
    carouselTotalItemsLabel.textContent = `1 / ${projects.length}`;
  } else {
    mobileCarousel.classList.add("d-none");
    projectsWrapper.innerHTML = projectsHTML;
  }
};

const a11yCards = (e) => {
  if (e.key === "Enter") {
    e.target.click();
  }
};

const modal = (e) => {
  const target = e.target;
  const projectId = target.closest(".a-card").id;
  const project = projects.filter((el) => el.id === parseInt(projectId))[0];

  if (project) {
    const modalDOM = {
      title: document.querySelector("#modalTitle"),
      summary: document.querySelector("#summary"),
      carrousel: document.querySelector('.carousel'),
      innerCarrousel: document.querySelector(".carousel-inner"),
      carrouselIndicators: document.querySelector(".carousel-indicators"),
      next: document.querySelector('.carousel-control-next'),
      prev: document.querySelector('.carousel-control-prev'),
      demoBtn: document.querySelector("#demo-btn"),
      codeBtn: document.querySelector("#source-code-btn"),
      tools: document.querySelector("#tools"),
    };

    modalDOM.title.textContent = `${project.title}`;
    modalDOM.summary.textContent = `${project.description}`;

    if(project.media.length <= 1) {
      
      modalDOM.carrouselIndicators.classList.add('d-none');
      // modalDOM.prev.classList.add('d-none');
      // modalDOM.next.classList.add('d-none');
    } else {
      modalDOM.carrouselIndicators.classList.remove('d-none');
      // modalDOM.prev.classList.remove('d-none');
      // modalDOM.next.classList.remove('d-none');
    }
    
    modalDOM.innerCarrousel.innerHTML = project.media
      .map((media, index) => {
        return `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                  <img src="${
                    media.src
                  }" id="modal--thumbnail" alt="carrousel-img">
                </div>`;
      })
      .join(" ");

      modalDOM.carrouselIndicators.innerHTML = project.media.map((media, index) => {
        return `
          <button class="indicator ${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to=${index} aria-label="Slide ${index}"></button>
        `;
      }).join(" ");


    modalDOM.demoBtn.setAttribute("href", `${project.demoLink}`);
    modalDOM.codeBtn.setAttribute("href", `${project.githubLink}`);

    modalDOM.tools.innerHTML = project.stack
      .map(
        (item) => `
                <div class="pill pill--clear-sky me-2 mb-2">
                    <span>${item}</span>
                </div>
                `
      )
      .join(" ");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  [...cards].map((item) => item.addEventListener("click", modal));
  [...cards].map((card) => card.addEventListener("keypress", a11yCards));
  projectsCarousel.addEventListener("slide.bs.carousel", function (event) {
    const activeIndex = event.to;
    carouselTotalItemsLabel.textContent = `${activeIndex + 1} / ${
      projects.length
    }`;
  });
});
