function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(booksJSON => renderBooks(booksJSON))
}



function renderBooks(books) { 
  var main = document.querySelector('main'); 
  books.forEach(book => { 
  var h2 = document.createElement('h2'); 
  h2.innerHTML = book.name; 
  var h1 = document.createElement('h1'); 
  h1.innerText = book.character; 
  h2.innerText = book.name; main.appendChild(h2); });

  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function () {
      fetchBooks();
    })});