document.addEventListener("DOMContentLoaded", () => {
    const skillsWrapper = document.querySelector(".skills-wrapper") as HTMLElement;
    const skills = Array.from(skillsWrapper.children) as HTMLElement[];
    const totalSkills = skills.length;

    let currentIndex = 0;

    function showNextSkill() {
        const nextIndex = (currentIndex + 1) % totalSkills;
        const nextSkill = skills[nextIndex];
        skillsWrapper.appendChild(nextSkill.cloneNode(true));
        skillsWrapper.removeChild(skillsWrapper.firstChild as Node);
        currentIndex = nextIndex;
    }

    setInterval(showNextSkill, 3000);
});
