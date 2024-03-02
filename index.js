function animateSkills() {
    let skillsDiv = document.querySelector('.skills');
    let skills = ['Django', 'JavaScript', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'React','SQL', 'Python', 'C++', 'Java', 'Git', 'GitHub', 'Linux', 'Selenium', 'BeautifuSoup'];
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

function displayProfile() {
    console.log('Profile');
}

function displayPortfolio() {
    console.log('Portfolio');
}

document.addEventListener('DOMContentLoaded', () => {
    // Main Content
    document.querySelector('.main').style.opacity = 1;
    
    // Skills
    animateSkills();

    // Profile
    document.querySelector('.profile').addEventListener('click', displayProfile);
    // Portfolio
    document.querySelector('.portfolio').addEventListener('click', displayPortfolio);
});