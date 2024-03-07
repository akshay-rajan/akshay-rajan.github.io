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

// * Display a Project when clicked
function displayProject(project, cardDiv) {
    // * If the project is displayed, hide it
    if (cardDiv.classList.contains('card-expanded')) {
        cardDiv.querySelector('.card-desc').remove();
        cardDiv.querySelector('.card-img').remove();            
        cardDiv.querySelector('.github-link').remove();            
        cardDiv.style.animation = 'zoomIn 1s forwards';
        cardDiv.classList.add('card');
        cardDiv.classList.remove('card-expanded');
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
    
    cardDiv.innerHTML = `<div class='card-content'>
                            <img class='card-img' src='${project['img']}' alt='Project Image'>
                            <p class='card-title'>${project['name']}</p>
                            <p class='card-para'>${project['details']}</p>
                            <p class='card-desc'>${project['description']}</p>
                            <button class='github-link' onclick="window.location.href='https://www.github.com/akshay-rajan/${project['github']}'"><icon class="fab fa-github"></icon> View on GitHub</button>
                        </div>`;
}
