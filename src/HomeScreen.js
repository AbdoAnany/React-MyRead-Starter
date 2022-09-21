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
      {props.allShelf.map(shelf => (
      <BookShelf
        books={props.allBooks}
        shelf={shelf.key}
        shelfTitle={shelf.name}
        ShelfChanger={props.ShelfChanger}/>
     ))}
    </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
export default HomeScreen;
