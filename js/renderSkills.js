const skillsWrapper = document.querySelector('.skills__knowledge');

export const renderSkills = (skillsArr) => {
  const skills = skillsArr
    .map((skill) => {
      return `
            <div class="pill pill--clear-sky my-2 me-1">
                <span>${skill}</span>
            </div>
        `;
    })
    .join(" ");
  skillsWrapper.innerHTML = skills;
};
