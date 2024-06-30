"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function animateSkills(skills) {
    skills.forEach((skill, index) => {
        skill.style.transition = `transform 0.5s ${index * 0.1}s ease-in-out`;
        skill.style.transform = 'translateX(100%)';
    });
    setTimeout(() => {
        skills.forEach((skill) => {
            skill.style.transition = '';
            skill.style.transform = 'translateX(-100%)';
        });
    }, 500);
}
document.addEventListener('DOMContentLoaded', () => {
    const skillsWrapper = document.querySelector('.skills-wrapper');
    if (skillsWrapper) {
        const skills = Array.from(skillsWrapper.children);
        skillsWrapper.addEventListener('animationiteration', () => animateSkills(skills));
    }
});
