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

  function ShelfChanger(book, shelf,isSearch) {
    API.update(book, shelf);
    book.shelf = shelf;
    let newBooks = allBooks.filter((myBook) => myBook.id !== book.id);
    setAllBooks(() => newBooks.concat(book));
    if(isSearch){
      setSearchResult(  searchResult.filter((item) => 
      item.id !== book.id));
    }
  }


  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const search = async () => {
      var result = await API.search(inputValue, 20);
      const allBook = await API.getAll();
      var resFilter =result
      
      if (Array.isArray(result)) {

        for (let i = 0; i < allBook.length; i++) {
          
          resFilter= resFilter.filter((item) => 
          item.id !== allBook[i].id);
          
        }       
        setSearchResult(resFilter);
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
    <div className="app">
      <Routes>
      <Route path="/" exact
          element={
            <HomeScreen allBooks={allBooks} allShelf={allShelf} ShelfChanger={ShelfChanger}></HomeScreen>
          } />
        <Route
          path="search"exact
          element={<Search 
            searchInputHandler={searchInputHandler}
            searchResult ={searchResult}
            isSearch={true}
          ShelfChanger={ShelfChanger}
           books={allBooks}/>}/>
      </Routes>
    </div>
  );
}

export default App;