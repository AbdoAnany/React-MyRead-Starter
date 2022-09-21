import React, { useEffect, useState } from "react";
import * as API from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

function Search(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const search = async () => {
      const result = await API.search(inputValue, 20);
      if (Array.isArray(result)) {
       
        setSearchResult(result);
      } else {
       
        setSearchResult([]);
      }
    };
    search();

  }, [inputValue]);

  function searchInputHandler(e) {
    if (e.target.value === "") {
    
      setSearchResult([]);
    }

    setInputValue(e.target.value);
  }


  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchInputHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{ searchResult.map((myBook) => (
      <li key={myBook.id}>
        <Book book={myBook} isSearch={true}  ShelfChanger={props.ShelfChanger} books={props.books}></Book>
      </li>
    ))}</ol>
      </div>
    </div>
  );
}

export default Search;
