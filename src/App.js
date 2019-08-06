import React from 'react';

import './App.css';
import BookSearchForm from './BookSearchForm';
import BookList from './BookList';


class App extends React.Component {

  static defaultProps = {
    books: []
  }

  constructor(props) {

    super(props);

    this.state = {
      books: props.books
    }

    this.setBookSearchResult = this.setBookSearchResult.bind(this)
  }

  setBookSearchResult(bookData) {

    const newBooks = bookData.map(book => {

      let newBook = {}
      newBook.title = book.volumeInfo.title;
      newBook.author = book.volumeInfo.authors[0];

      newBook.image = "alt";
       if (book.volumeInfo.imageLinks != undefined)
        newBook.image = book.volumeInfo.imageLinks.thumbnail;

      if (book.saleInfo.retailPrice != undefined)
        newBook.price = "$" + book.saleInfo.retailPrice.amount;
      else if (book.saleInfo.saleability != undefined)
        newBook.price = book.saleInfo.saleability;

      newBook.summary = "";
      if (book.searchInfo != undefined)
        newBook.summary = book.searchInfo.textSnippet;
      
      return newBook;
    });

    this.setState({
      books: newBooks
    })
  }


  render() {

    return (
      <div className="App">
        <h1 className="app-title">Google Book Search</h1>
        <BookSearchForm setBookSearchResult={this.setBookSearchResult}/>
        <BookList books={this.state.books} />
      </div>      
    );
  }
}

export default App;
