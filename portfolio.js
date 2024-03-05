let cardsDiv = document.querySelector('.project-cards');

function displayCard() {
    let projects = {
        '1': {
            'name': 'DeviceDash',
            'details': 'Smartphone Recommendation Website',
            'github': 'devicedash',
            'description': 'DeviceDash is a smartphone recommendation website that helps users find the best smartphone for their needs. It uses a machine learning model to predict the best smartphone for the user based on their preferences. The website is built using Django and the machine learning model is built using Python.'
        },
        '2': {
            'name': 'Timer For Chrome',
            'details': 'A Timer Chrome Extension',
            'github': 'timer'
        },
        '3': {
            'name': 'Auctions',
            'details': 'Auction Website',
            'github': 'cs50w/blob/main/commerce'
        },
        '4': {
            'name': 'Ripple',
            'details': 'A Twitter-like Social Media App',
            'github': 'cs50w/tree/main/network'
        },
        '5': {
            'name': 'Numerical Methods',
            'details': 'Solving Mathematical Problems using Numerical Analysis in Python',
            'github': 'numericalmethods'
        },
    };
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
        cardDiv.innerHTML = `<div class='card-content'>
                                <p class='card-title'>${project['name']}</p>
                                <p class='card-para'>${project['details']}</p>
                            </div>`;
        cardDiv.classList.remove('card-expanded');
        return;
    }
    // * Hide any other project that is displayed
    Array.from(cardsDiv.children).forEach(card => {
        if (card.classList.contains('card-expanded')) {
            card.querySelector('.card-desc').remove();
            card.querySelector('.github-link').remove();            
            card.classList.remove('card-expanded');
        }
    });
    // * Display the project
    cardDiv.classList.add('card-expanded');
    cardDiv.innerHTML = `<div class='card-content'>
                            <p class='card-title'>${project['name']}</p>
                            <p class='card-para'>${project['details']}</p>
                            <p class='card-desc'>${project['description']}</p>
                            <button class='github-link' onclick="window.location.href='https://www.github.com/akshay-rajan/${project['github']}'"><icon class="fab fa-github"></icon> View on GitHub</button>
                        </div>`;
}
