import React from "react";
import Book from "./Book";

function BookShelf(props) {
 

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{props.books
    .filter((book) => book.shelf === props.shelf)
    .map((myBook) => {
      return (
        <li key={myBook.id}>
          <Book book={myBook} ShelfChanger={props.ShelfChanger} books={props.books}></Book>
        </li>
      );
    })}</ol>
      </div>
    </div>
  );
}

export default BookShelf;
