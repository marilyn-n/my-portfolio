const skillsWrapper = document.querySelector('.skills__knowledge');

export const renderSkills = (skillsArr) => {
  const skills = skillsArr
    .map((skill) => {
      return `
            <div class="pill pill--clear-sky my-2 mx-2">
                <span>${skill}</span>
            </div>
        `;
    })
    .join(" ");
  skillsWrapper.innerHTML = skills;
};
