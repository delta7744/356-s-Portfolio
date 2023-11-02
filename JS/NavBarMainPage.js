const categories = document.querySelectorAll('li');

categories.forEach(category => {
  category.addEventListener('click', () => {
    category.style.backgroundColor = 'white';
  });
});