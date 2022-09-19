import React from 'react'
import Book from "./Book"
import * as BooksAPI from "./BooksAPI"
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
  state = {
    searchResults : [],
    value: ''
  }

  handleChange = event => {
    const res = event.target.value;
    this.setState({ value: res });

    if (res.length > 0) {
      BooksAPI.search(res).then(books => {
        if (books.error) {
          this.setState({ searchResults: [] });
        } else {
          this.setState({ searchResults: books });
        }
      }).catch(this.setState({ searchResults: [] }));
    }else {
      BooksAPI.getAll(res).then(books => {
        if (books.error) {
          this.setState({ searchResults: [] });
        } else {
          this.setState({ searchResults: books });
        }
      }).catch(this.setState({ searchResults: [] }));
    }
  };

  resetSearch = () => {
    this.setState({ searchResults: [] });
  }

  render() {
    const { books, onChangeShelf } = this.props;
    this.state.searchResults.forEach(function(searchedBook){
      books.forEach(function(book){
        if (book.id === searchedBook.id) {
          searchedBook.shelf = book.shelf;
        }
      });
      if(!searchedBook.shelf){
        searchedBook.shelf = 'none';
      }
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link to="/"><button className="close-search" onClick={this.resetSearch} >Close</button></Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
             value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchResults.map(book => (
              <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
