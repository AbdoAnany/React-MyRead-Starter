import React from "react";
import BookShelf from "./components/BookShelf";
import { Link } from "react-router-dom";

function HomeScreen(props) {
  return (
    <div>
    <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      <BookShelf
        books={props.allBooks}
        shelf="currentlyReading"
        shelfTitle="Currently Reading" isSearch={false}
        ShelfChanger={props.ShelfChanger}
      />
      <BookShelf
        books={props.allBooks} isSearch={false}
        shelf="wantToRead"
        shelfTitle="Want to Read"
        ShelfChanger={props.ShelfChanger}
      />
      <BookShelf
        books={props.allBooks}
        shelf="read"
        shelfTitle="Read" isSearch={false}
        ShelfChanger={props.ShelfChanger}
      />
    </div>
    
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
export default HomeScreen;
