import Book from "./Book";
import { Link } from "react-router-dom";

function Search(props) {
 



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
            onChange={props.searchInputHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{ 
       props.searchResult.map((myBook) => (
      <li key={myBook.id}>
        <Book book={myBook} isSearch={props.isSearch}  ShelfChanger={
         props.ShelfChanger} books={props.books}></Book>
      </li>
    ))}</ol>
      </div>
    </div>
  );
}

export default Search;
