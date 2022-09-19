import React from 'react'
import Book from "./Book"
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
  render() {
    const { books, shelves, onChangeShelf } = this.props;
 

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads </h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (

<div className="bookshelf">
<h2 className="bookshelf-title">{shelf.name}</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
    { books.filter(book => book.shelf === shelf.key).map(book => (
      <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
    ))}
  </ol>
</div>
</div>

            
            ))}
          </div>
        </div>
        <div className="open-search">
      <Link to="/search"><button>Add a book</button></Link>
    </div>
      </div>
    )
  }
}

export default ListBooks
