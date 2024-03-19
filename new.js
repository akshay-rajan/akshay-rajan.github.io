function animateSkills() {
    let skillsDiv = document.querySelector('.skills');
    let skills = ['Django', 'JavaScript', 'Flask', 'Python', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'C', 'Java', 'Git', 'GitHub', 'Linux', 'BeautifuSoup', 'PHP', 'MySQL'];
    let index = 0;

    function addSkill() {
        let currentSkill = document.createElement('div');
        currentSkill.classList.add('skill');
        currentSkill.innerText = skills[index % skills.length];
        currentSkill.style.animation = `fadeInOut 2s ease-in-out forwards`;
        skillsDiv.appendChild(currentSkill);

        currentSkill.addEventListener('animationend', () => {
            setTimeout(() => {
                skillsDiv.removeChild(currentSkill);
                index++;
                addSkill();
            }, 1000);
        });
    }
    addSkill();
};



document.addEventListener('DOMContentLoaded', () => {
    
    // Skills
    animateSkills();

});
