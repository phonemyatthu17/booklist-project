// Book Class : Represents a Book

class Book {
  constructor(title, author, code) {
    this.title = title;
    this.author = author;
    this.code = code;
  }
}

// UI Class : Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Ma Hla Ma Pa Bawa",
        author: "Phone Myat Thu",
        code: "230493",
      },
      {
        title: "Yone sone kabar G",
        author: "Phone Myat Thu",
        code: "454452",
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => {
      UI.addBookList(book);
    });
  }
  static addBookList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.code}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
    list.appendChild(row);
  }

  static clearfields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("code").value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}

// Store Class : Handle Storage

// Event : Display Books

document.addEventListener("DOMContentLoaded", UI.displayBooks());

// Event : Add a Book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent default

  e.preventDefault();

  // get values from form

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const code = document.getElementById("code").value;

  // instantiate book

  const book = new Book(title, author, code);

  // display a book

  UI.addBookList(book);

  // clear fields

  UI.clearfields();
});

// Event : Remove a Book

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
