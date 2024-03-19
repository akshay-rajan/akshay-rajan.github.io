document.addEventListener('DOMContentLoaded', () => {
    
    // Skills
    animateSkills();

    // Personal links
    window.onload = addLinks;

    // Navigation Bar
    navBar();

});

// * Animate Skill display below name
function animateSkills() {
    let skillsDiv = document.querySelector('.skills');
    let skills = ['Django', 'Flask', 'Python', 'JavaScript','Bootstrap', 'SQL', 'HTML & CSS', 'C', 'Java', 'Linux', 'Web Scraping', 'Git', 'PHP', 'CyberSecruity', 'AI', 'Machine Learning'];
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
            <a href="https://www.linkedin.com/in/akshayrajan1/">
                <img src="static/linkedin-icon.png" alt="">
            </a>
        </div>
        <div class="link-2">
            <a href="https://www.github.com/akshay-rajan">
                <img src="static/github-icon.png" alt="">
            </a>
        </div>
        <div class="link-3">
            <a href="https://www.leetcode.com/akshayrajan">
                <img src="static/leetcode-icon.png" alt="">
            </a>
        </div>
        <div class="link-4">
            <a href="mailto:akshayrajan345@gmail.com">
                <img src="static/email-icon.png" alt="">
            </a>
        </div>
    </div>`;

    // For smartphones
    if (window.innerWidth <= 600)
        document.querySelector('.second').innerHTML = linksHTML;
    else
    // For large Screens
document.querySelector('.fourth').innerHTML = linksHTML;    
}

// * Navigation Bar

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

function navBar() {
    hamburger.addEventListener('click', () => {
        
        if (hamburger.classList.contains('open')) {
            // Remove the open class from the hamburger
            hamburger.classList.remove('open');
            // Remove the image
            document.body.removeChild(document.querySelector('.js-nav-bg'));

            document.body.style.overflow = 'auto';
            // Remove the on-top class from the nav-links
            navLinks.classList.remove('on-top');
            
        } else {
            // Add the open class to the hamburger
            hamburger.classList.add('open');

            // Create the image and append it to the body
            const img = document.createElement('img');
            img.src = 'static/space.jpg';
            img.classList.add('js-nav-bg');
            document.body.appendChild(img);
                            
            // Display the nav links on top of the image
            navLinks.classList.add('on-top');
            navLinks.style.zIndex = '1000';
            
            document.body.style.overflow = 'hidden';
        }
    });
}
