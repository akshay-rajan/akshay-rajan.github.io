document.addEventListener('DOMContentLoaded', () => {
    
    // Skills
    animateSkills();

});

// * Animate Skill display below name
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

// * Add personal links corresponding to the device
function addLinks() {
    let linksHTML = `<div class="links">
        <div class="link-1">
            <a href="#">
            <img src="static/linkedin-icon.png" alt="">
            </a>
        </div>
        <div class="link-2">
            <a href="#">
            <img src="static/github-icon.png" alt="">
            </a>
        </div>
        <div class="link-3">
            <a href="#">
            <img src="static/email-icon.png" alt="">
            </a>
        </div>
        <div class="link-4">
            <a href="#">
            <img src="static/phone-icon.png" alt="">
            </a>
        </div>
    </div>`;

    // For smartphones
    if (window.innerWidth <= 768)
        document.querySelector('.second').innerHTML = linksHTML;
    else
    // For large Screens
        document.querySelector('.fourth').innerHTML = linksHTML;    
}

window.onload = addLinks;
window.onresize = addLinks;

