function displayCard() {
    let projects = {
        '1': {
            'name': 'DeviceDash',
            'details': 'Smartphone Recommendation Website',
            'github': 'devicedash'
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
    let cardsDiv = document.querySelector('.project-cards');
    Object.values(projects).forEach(project => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `<div class='card-content'>
                                <p class='card-title'>${project['name']}</p>
                                <p class='card-para'>${project['details']}</p>
                            </div>`;
        cardsDiv.appendChild(cardDiv);
        cardDiv.addEventListener('click', () => {
            window.location.href = `https://www.github.com/akshay-rajan/${project['github']}`;
        });
    });
}
