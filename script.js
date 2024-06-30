"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function animateSkills(skills) {
    skills.forEach(function (skill, index) {
        skill.style.transition = "transform 0.5s ".concat(index * 0.1, "s ease-in-out");
        skill.style.transform = 'translateX(100%)';
    });
    setTimeout(function () {
        skills.forEach(function (skill) {
            skill.style.transition = '';
            skill.style.transform = 'translateX(-100%)';
        });
    }, 500);
}
document.addEventListener('DOMContentLoaded', function () {
    var skillsWrapper = document.querySelector('.skills-wrapper');
    if (skillsWrapper) {
        var skills_1 = Array.from(skillsWrapper.children);
        skillsWrapper.addEventListener('animationiteration', function () { return animateSkills(skills_1); });
    }
});
//# sourceMappingURL=script.js.map