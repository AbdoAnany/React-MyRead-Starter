import React from 'react'
import './App.css'
import { Route,BrowserRouter } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import ListBooks from "./ListBooks"
import SearchBooks from "./SearchBooks"

class HomeApp extends React.Component {
  state = {
    books : [],
    shelves : [
   
      {key:'currentlyReading' , name: 'Currently Reading'},
      {key:'wantToRead' , name: 'Want to Read'},
      {key:'read' , name: 'Read'},
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>   this.setState({ books }) );
  }

  changeState = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
     
      if(book.shelf === 'none' && shelf !== 'none')
        this.setState(state => {  return {books:  state.books.concat(book)}})
      
      const updatedBookState = this.state.books.map(c => {
        if (c.id === book.id) { c.shelf = shelf }
        return c;
      });

      this.setState({  books: updatedBookState,});
              if(shelf === 'none')
          this.setState(state=>{
            return {books: state.books.filter(deleteBook => deleteBook.id !== book.id)}
          })
        
    });
  }

  render() {

    return (
      <div className="app">
        <BrowserRouter>      
      
        <Route path='/search'
        render={() => (
          <SearchBooks books={this.state.books}    onChangeShelf={this.changeState} />
        )} />

        <Route exact path='/'
        render={() => (
          <ListBooks books={this.state.books} shelves={this.state.shelves}  onChangeShelf={this.changeState} />
        )} />
            </BrowserRouter>

      </div>
    )
  }
}


export default HomeApp
