document.addEventListener('DOMContentLoaded', () => {
    
    // Skills
    animateSkills();

    // Personal links
    window.onload = addLinks;

    // Navigation Bar
    enableHome();
    enableAbout();
    enableProjects();
    enableContact();

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

// * Navigation Bar Button Action 
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

function navBar(key) {
    
    if (hamburger.classList.contains('open')) {
        // Change back icon to hamburger icon
        hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
        
        // Get the image div
        const imgDiv = document.querySelector('.js-nav-bg');
        
        // Apply the reverse animation
        imgDiv.style.animation = 'fadeOut 0.5s forwards';
        navLinks.classList.remove('on-top');
        navLinks.style.display = 'none';
        
        // Remove the image after the animation is complete
        imgDiv.addEventListener('animationend', () => {
            document.body.removeChild(imgDiv);
            // Remove the on-top class from the nav-links
            navLinks.classList.remove('on-top');
            navLinks.style.display = 'none';
        });
        
        document.body.style.overflow = 'auto';
        
        // Remove the open class from the hamburger
        hamburger.classList.remove('open');
    } else {
        
        // ? Special Command
        if (key === "click") return;

        // Change hamburger icon to back icon
        hamburger.innerHTML = `<i class="fas fa-x"></i>`;

        // Add the open class to the hamburger
        hamburger.classList.add('open');

        // Create the image and append it to the body
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = 'static/leaves-nav-bg.jpg';
        imgDiv.appendChild(img);

        // Animation
        imgDiv.style.width = '0';
        imgDiv.style.height = '0';
        imgDiv.classList.add('js-nav-bg');
        imgDiv.style.animation = 'fadeIn 0.5s forwards';
        document.body.appendChild(imgDiv);
        setTimeout(() => {
            imgDiv.style.width = '100vw';
            imgDiv.style.height = '100vh';
        }, 0);
        imgDiv.addEventListener('animationend', () => {
            // Display the nav links on top of the image
            navLinks.style.display = 'block';
            navLinks.classList.add('on-top');
            navLinks.style.zIndex = '10';
        });

        document.body.style.overflow = 'hidden';
    }
}

hamburger.addEventListener('click', () => {
    navBar();
});


// * Navigation Bar Action after Scrolling (Desktop)
window.onscroll = function() {
    if (window.matchMedia("(min-width: 601px)").matches) {
        let aboutDiv = document.querySelector('.about');
        let children = navLinks.children;
        if (window.scrollY >= aboutDiv.getBoundingClientRect().top + window.scrollY) {
            // The user has scrolled to the about section
            navLinks.style.display = 'none';
            hamburger.style.display = 'block';
        } else {
            // The user has not scrolled to the element
            navLinks.style.display = 'block';
            hamburger.style.display = 'none';
            
        }
    }
};

// * Navigation Bar Buttons: JQuery
function enableHome () {
    let homeButton = document.querySelector('#home-button');
    homeButton.addEventListener('click', () => {
        // Hide navigation bar
        navBar("click");
        // Prevent directly going to the position without displaying the animation
        event.preventDefault();
        // JQuery Animation
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
}
function enableAbout() {
    let aboutButton = document.querySelector('#about-button');
    aboutButton.addEventListener('click', () => {
        navBar("click");
        event.preventDefault();
        let aboutDiv = document.querySelector('#about');
        $('html, body').animate({
            scrollTop: $(aboutDiv).offset().top
        }, 800);
    });
}

function enableProjects() {
    let projectsButton = document.querySelector('#projects-button');
    projectsButton.addEventListener('click', (event) => {
        navBar("click");
        event.preventDefault();
        let projectsDiv = document.querySelector('#projects');
        $('html, body').animate({
            scrollTop: $(projectsDiv).offset().top
        }, 800);
    });
}

function enableContact() {
    let contactButton = document.querySelector('#contact-button');
    contactButton.addEventListener('click', (event) => {
        navBar("click");
        event.preventDefault();
        let contactDiv = document.querySelector('#contact');
        $('html, body').animate({
            scrollTop: $(contactDiv).offset().top
        }, 800);
    });
}

// * About Page Links Functionality
const aboutLinks = document.querySelectorAll('.about-links');
const aboutDivs = document.querySelectorAll('.about-contents');

function displayAbout(div) {
    let thisLink = event.target;
    thisLink.classList.add('active-link');
    aboutLinks.forEach(link => {
        if (link != thisLink) {
            if (link.classList.contains('active-link')) {
                link.classList.remove('active-link');
            }
        }
    });
    let myDiv = document.querySelector(`#${div}`);
    aboutDivs.forEach(div => {
        if (div != myDiv)
            div.style.display = 'none';
    });
    myDiv.style.display = 'block';  
}
