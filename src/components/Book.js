import React from "react";

function Book(props) {
  function ShelfChanger(e) {
    props.ShelfChanger(props.book, e.target.value);
  }
    let shelfValue = "none";
    
    if(props.books.find((book)=>book.id === props.book.id)) {
      shelfValue = props.books.find((book)=>book.id === props.book.id).shelf;
    }
    return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${props.book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <div className="book-shelf-changer">

        <select onChange={ShelfChanger} defaultValue={shelfValue}>
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default Book;
