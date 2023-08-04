function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Call response.json() with parentheses
    .then((books) => renderBooks(books)); // Pass the fetched JSON data to renderBooks()
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((books) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = books.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
