import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import * as API from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [allShelf] = useState([
   
    {key:'currentlyReading' , name: 'Currently Reading'},
    {key:'wantToRead' , name: 'Want to Read'},
    {key:'read' , name: 'Read'},
  ]);

  useEffect(() => {
    const booksFn = async () => {
      const booksResult = await API.getAll();
      setAllBooks(booksResult);
    };
    booksFn();
  }, []);

  function ShelfChanger(book, shelf) {
    API.update(book, shelf);
    book.shelf = shelf;
    let newBooks = allBooks.filter((myBook) => myBook.id !== book.id);
    setAllBooks(() => newBooks.concat(book));
  }

  return (
    <div className="app">
      <Routes>
      <Route path="/" exact
          element={
            <HomeScreen allBooks={allBooks} allShelf={allShelf} ShelfChanger={ShelfChanger}></HomeScreen>
          } />
        <Route
          path="search"exact
          element={<Search ShelfChanger={ShelfChanger} books={allBooks}/>}/>
      </Routes>
    </div>
  );
}

export default App;
