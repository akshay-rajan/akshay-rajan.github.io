document.addEventListener('DOMContentLoaded', () => {

    // Hide Preloader
    document.body.classList.add('loaded');
    // document.getElementById('preloader').style.display = 'none';
    
    // Skills
    animateSkills();

    // Personal links
    window.onload = addLinks;

    // Navigation Bar
    enableHome();
    enableAbout();
    enableProjects();
    enableContact();

    // Projects
    displayCard();

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

// * Education Section Animation
window.addEventListener('scroll', function() {
    let educationCol1 = document.querySelector('.education-col-1');
    let aboutSection = document.querySelector('#about');

    // Get the top and bottom positions of the about section
    let sectionTop = aboutSection.offsetTop;
    let sectionBottom = sectionTop + aboutSection.offsetHeight;

    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Calculate the percentage scrolled within the about section
    let scrollValue = (((scrollPosition - sectionTop) / (sectionBottom - sectionTop)) * 100);
    function mapRange(number, inMin, inMax, outMin, outMax) {
        return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    
    // Set the color of education-col-1 based on the scroll percentage
    if (window.innerWidth > 600)
        scrollValue = mapRange(scrollValue, 13, 53, 1, 100);
    else
        scrollValue = mapRange(scrollValue, 13, 53, 1, 100) - 25;
    
    educationCol1.style.background = `linear-gradient(to bottom, rgb(252, 179, 90) ${scrollValue}%, white ${100 - scrollValue}%)`;
});

// * Project Cards
let cardsDiv = document.querySelector('.project-cards');

let projects = {
    '1': {
        'name': 'DeviceDash',
        'details': 'Smartphone Recommendation Website',
        'github': 'devicedash',
        'img': 'static/devicedash.png',
        'description': 'DeviceDash is a smartphone recommendation website that helps users find the best smartphone for their needs. It uses a set of pre-defined ratings to predict the best smartphone for the user based on their preferences. The website is built using Django.'
    },
    '2': {
        'name': 'Timer For Chrome',
        'details': 'A Timer Chrome Extension',
        'img': 'static/timer.png',
        'github': 'timer',
        'description': 'Timer for Chrome is a Chrome Extension that allows users to set a timer for a specific time. The extension is built using JavaScript and HTML. Built as a part of the CS50 course.'
    },
    '3': {
        'name': 'Auctions',
        'details': 'Auction Website',
        'img': 'static/auctions.png',
        'github': 'cs50w/blob/main/commerce',
        'description': 'Auctions is a website that allows users to create auctions, bid on auctions, and add auctions to their watchlist. The website is built using Django and Bootstrap.'
    },
    '4': {
        'name': 'Ripple',
        'details': 'A Twitter-like Social Media App',
        'img': 'static/ripple.png',
        'github': 'cs50w/tree/main/network',
        'description': 'Ripple is a social media app inspired from Twitter(X) that allows users to post messages, follow other users, and like posts. The website is built using Django and Bootstrap.'
    },
    '5': {
        'name': 'Wiki',
        'details': 'Blogging Platform',
        'img': 'static/wiki.png',
        'github': 'cs50w/tree/main/wiki',
        'description': 'Wiki is a blogging platform built using Django that allows users to create, edit, and delete blog posts. It is inspired by Wikipedia and uses Markdown for formatting the posts.'
    },
    '6': {
        'name': 'Numerical Methods',
        'details': 'Solving Mathematical Problems using Numerical Analysis in Python',
        'github': 'numericalmethods',
        'img': 'static/numericalmethods.png',
        'description': 'Numerical Methods is my graduation project, which contains programs in python that allows users to solve mathematical problems using numerical analysis. The project includes methods for solving algebraic and transcendental equations, interpolation, and solving differential equations.'
    },
};

// * Display the projects
function displayCard() {
    Object.values(projects).forEach(project => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `<div class='card-content'>
                                <p class='card-title'>${project['name']}</p>
                                <p class='card-para'>${project['details']}</p>
                            </div>`;
        cardsDiv.appendChild(cardDiv);
        cardDiv.addEventListener('click', () => {
            displayProject(project, cardDiv);
        });
    });
}
// Display a Project when clicked
function displayProject(project, cardDiv) {
    // * If the project is displayed, hide it
    if (cardDiv.classList.contains('card-expanded')) {
        cardDiv.querySelector('.card-desc').remove();
        cardDiv.querySelector('.card-img').remove();            
        cardDiv.querySelector('.github-link').remove();            
        cardDiv.style.animation = 'zoomIn 1s forwards';
        cardDiv.classList.add('card');
        cardDiv.classList.remove('card-expanded');
        // Display the hidden cards
        hideCards();
        // Scroll to the top of the div
        const distanceToTop = document.querySelector('#projects').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: distanceToTop,
            behavior: "smooth"
        });
        return;
    }
    // * Hide any other project that is displayed
    Array.from(cardsDiv.children).forEach(card => {
        if (card.classList.contains('card-expanded')) {
            card.querySelector('.card-desc').remove();
            card.querySelector('.card-img').remove();            
            card.querySelector('.github-link').remove();            
            card.style.animation = 'zoomIn 1s forwards';
            card.classList.add('card');
            card.classList.remove('card-expanded');
        }
    });
    // * Display the project
    cardDiv.classList.remove('card');
    cardDiv.style.animation = 'zoomOut 1s forwards';
    cardDiv.classList.add('card-expanded');
    hideCards(cardDiv);

    
    cardDiv.innerHTML = `<div class='card-content'>
                            <img class='card-img' src='${project['img']}' alt='Project Image'>
                            <p class='card-title'>${project['name']}</p>
                            <p class='card-para'>${project['details']}</p>
                            <p class='card-desc'>${project['description']}</p>
                            <button class='github-link' onclick="window.location.href='https://www.github.com/akshay-rajan/${project['github']}'"><icon class="fab fa-github"></icon> View on GitHub</button>
                        </div>`;
    
    // Scroll to the opened card
    const cardRect = cardDiv.getBoundingClientRect();
    const cardTop = cardRect.top + window.scrollY;
    const cardLeft = cardRect.left + window.scrollX;
    window.scrollTo({
        top: cardTop,
        left: cardLeft,
        behavior: 'smooth'
    });
}
// Hide all cards except one
function hideCards(current=null) {
    console.log("heyy");
    // Hide all cards except current card
    Array.from(cardsDiv.children).forEach(card => {
        if (current) {
            // Hide the card 
            if (card != current)
                card.style.display = 'none';
        } else {
            card.style.display = 'flex';
        }
    });
}
