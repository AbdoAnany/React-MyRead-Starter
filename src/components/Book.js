import React from "react";
import noCover from "../icons/download.png";

function Book(props) {
 
  let imageCover;
  if (props.book.imageLinks) {
    imageCover = props.book.imageLinks.thumbnail;
  } else {
    imageCover = noCover;
  }
  function ShelfChanger(e) {
    props.ShelfChanger(props.book,  e.target.value,props.isSearch);
  }

    let shelfValue = "none";
    
    if(props.books.find((book)=>book.id === props.book.id)) {
      shelfValue = props.books.find((book)=>book.id ===  props.book.id).shelf;
    }
    let noneOption;

  if (props.isSearch) {
    noneOption = null;
  } else {
    noneOption = (
      <option value="none">None</option>
    );
  }
    return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: 
            `url("${imageCover}")`,
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
      {noneOption}
      
   
    </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default Book;
