function displayCard() {
    let projects = {
        'project1': {
            'name': 'Name',
            'details': 'Details',
        },
        'project2': {
            'name': 'Name',
            'details': 'Details',
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
