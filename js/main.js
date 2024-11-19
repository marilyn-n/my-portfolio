import { skills, jobs } from "./data.js";
import { renderJobs } from "./renderJobs.js";
import { renderProjects } from "./renderProjects.js";
import { renderSkills } from "./renderSkills.js";

let switchBtn = document.querySelector('label.switch-btn input[type="checkbox"]');
let switchWrapper = document.querySelector("label.switch-btn");
let switchLabelText = document.querySelector("label.switch-btn span.switch-btn__text");
const html = document.querySelector("HTML");

const loadDarkModeStorage = () => {
  const storedCheckboxValue = JSON.parse(localStorage.getItem("darkMode"));
  storedCheckboxValue
    ? html.classList.add("dark-mode")
    : html.classList.remove("dark-mode");

  switchBtn.checked = storedCheckboxValue;
  setAriaChecked(storedCheckboxValue);
  
  switchLabelText.textContent = `Turn night mode ${
    storedCheckboxValue ? "off" : "on"
  }`;
};

const darkModeHandler = (e) => {
  switchBtn.checked
    ? html.classList.add("dark-mode")
    : html.classList.remove("dark-mode");
  switchLabelText.textContent = `Turn night mode ${
    switchBtn.checked ? "off" : "on"
  }`;
  setAriaChecked(switchBtn.checked ? "true" : "false");
  if (e.key === "Enter") {
    setAriaChecked(switchBtn.checked ? "true" : "false");
    switchBtn.click();
  }

  localStorage.setItem("darkMode", JSON.stringify(switchBtn.checked));
};

const setAriaChecked = (value) => switchWrapper.setAttribute("aria-checked", value);

renderSkills(skills);
loadDarkModeStorage();
renderJobs(jobs);
renderProjects();
switchBtn.addEventListener("change", darkModeHandler);
switchWrapper.addEventListener("keypress", darkModeHandler);