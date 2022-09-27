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

  static showAlert(message, answer) {
    const div = document.createElement("div");
    div.className = `alert alert-${answer} text-center`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");
    container.insertBefore(div, form);

    // disappear in 3s

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
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

  // validate

  if (title === "" || author === "" || code === "") {
    UI.showAlert("pls fill all the form", "danger");
  } else {
    // instantiate book

    const book = new Book(title, author, code);

    // display a book

    UI.addBookList(book);

    // success

    UI.showAlert("success", "success");

    // clear fields

    UI.clearfields();
  }
});

// Event : Remove a Book

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
