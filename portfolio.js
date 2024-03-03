function displayCard() {
    let projects = {
        '1': {
            'name': 'DeviceDash',
            'details': 'Smartphone Recommendation Website',
        },
        '2': {
            'name': 'Timer For Chrome',
            'details': 'A Timer Chrome Extension',
        },
        '3': {
            'name': 'Auctions',
            'details': 'Auction Website',
        },
        '4': {
            'name': 'Ripple',
            'details': 'A Twitter-like Social Media App',
        },
        '5': {
            'name': 'Numerical Analysis',
            'details': 'Solving Mathematical Problems using Numerical Analysis in Python',
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
    });
}
