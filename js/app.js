const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});