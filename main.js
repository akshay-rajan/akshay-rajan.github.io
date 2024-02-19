// * Select the user input
const input = document.querySelector('.input');

// * Make appropriate redirections based on user input
input.addEventListener('input', (e) => {
  let value = e.target.value;

  myPages = {
    'profile': 'profile.html',
    'calendar': 'calendar.html',
    'github': 'github.com/akshay-rajan'
  }

  if (value == 'calendar') {
    window.location.href = 'calendar.html';
  } else if (value == 'profile') {
    window.location.href = 'profile.html';
  } else if (value == 'github') { 
    window.location.href = 'https://www.github.com/akshay-rajan';
  }
});