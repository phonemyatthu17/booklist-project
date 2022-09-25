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
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a>}</td>`;
    list.appendChild(row);
  }
}

// Store Class : Handle Storage

// Event : Display Books

// Event : Add a Book

// Event : Remove a Book
