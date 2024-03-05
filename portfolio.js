let cardsDiv = document.querySelector('.project-cards');

let projects = {
    '1': {
        'name': 'DeviceDash',
        'details': 'Smartphone Recommendation Website',
        'github': 'devicedash',
        'description': 'DeviceDash is a smartphone recommendation website that helps users find the best smartphone for their needs. It uses a set of pre-defined ratings to predict the best smartphone for the user based on their preferences. The website is built using Django.'
    },
    '2': {
        'name': 'Timer For Chrome',
        'details': 'A Timer Chrome Extension',
        'github': 'timer',
        'description': 'Timer for Chrome is a Chrome Extension that allows users to set a timer for a specific time. The extension is built using JavaScript and HTML. Built as a part of the CS50 course.'
    },
    '3': {
        'name': 'Auctions',
        'details': 'Auction Website',
        'github': 'cs50w/blob/main/commerce',
        'description': 'Auctions is a website that allows users to create auctions, bid on auctions, and add auctions to their watchlist. The website is built using Django and Bootstrap.'
    },
    '4': {
        'name': 'Ripple',
        'details': 'A Twitter-like Social Media App',
        'github': 'cs50w/tree/main/network',
        'description': 'Ripple is a social media app inspired from Twitter(X) that allows users to post messages, follow other users, and like posts. The website is built using Django and Bootstrap.'
    },
    '5': {
        'name': 'Numerical Methods',
        'details': 'Solving Mathematical Problems using Numerical Analysis in Python',
        'github': 'numericalmethods',
        'description': 'Numerical Methods is my graduation project, which contains programs in python that allows users to solve mathematical problems using numerical analysis. The project includes methods for solving algebraic and transcendental equations, interpolation, and solving differential equations.'
    },
};

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
            // window.location.href = `https://www.github.com/akshay-rajan/${project['github']}`;
        });
    });
}

function displayProject(project, cardDiv) {
    // * If the project is displayed, hide it
    if (cardDiv.classList.contains('card-expanded')) {
        cardDiv.querySelector('.card-desc').remove();
        cardDiv.querySelector('.github-link').remove();            
        cardDiv.style.animation = 'zoomIn 1s forwards';
        cardDiv.classList.remove('card-expanded');
        return;
    }
    // * Hide any other project that is displayed
    Array.from(cardsDiv.children).forEach(card => {
        if (card.classList.contains('card-expanded')) {
            card.querySelector('.card-desc').remove();
            card.querySelector('.github-link').remove();            
            cardDiv.style.animation = 'zoomIn 1s forwards';
            card.classList.remove('card-expanded');
        }
    });
    // * Display the project
    cardDiv.style.animation = 'zoomOut 1s forwards';
    cardDiv.addEventListener('animationend', () => {
        cardDiv.classList.add('card-expanded');
        cardDiv.innerHTML = `<div class='card-content'>
                                <p class='card-title'>${project['name']}</p>
                                <p class='card-para'>${project['details']}</p>
                                <p class='card-desc'>${project['description']}</p>
                                <button class='github-link' onclick="window.location.href='https://www.github.com/akshay-rajan/${project['github']}'"><icon class="fab fa-github"></icon> View on GitHub</button>
                            </div>`;
    });
}
