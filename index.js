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
    // Hide and Show elements
    document.querySelector('main').style.display = "none";
    document.querySelector('.portfolio').style.display = "none";
    document.querySelector('.profile').style.display = "block";
}

function displayPortfolio() {
    // Hide and Show elements
    document.querySelector('main').style.display = "none";
    document.querySelector('.profile').style.display = "none";
    document.querySelector('.portfolio').style.display = "block";    
}

function displayMain() {
    // Hide and Show elements
    document.querySelector('.profile').style.display = "none";
    document.querySelector('.portfolio').style.display = "none";
    document.querySelector('main').style.display = "block";
}

function mouseOverAnimation() {
    let mainDiv = document.querySelector('.main');
    mainDiv.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;
        
        const angle = mouseX * 360;        
        mainDiv.style.backgroundImage = `linear-gradient(${angle}deg, #182358  0%, #22133a 46%, #000000 100%)`;
    });    
}

document.addEventListener('DOMContentLoaded', () => {
    // Main Content
    document.querySelector('.main').style.opacity = 1;
    mouseOverAnimation();
    
    // Skills
    animateSkills();

    // Profile
    document.querySelector('#js-profile').addEventListener('click', displayProfile);

    // Portfolio
    displayCard();
    document.querySelector('#js-portfolio').addEventListener('click', displayPortfolio);

    // Display Main
    document.querySelectorAll('.js-main-btn').forEach(button =>
         button.addEventListener('click', displayMain)
        );   
    });