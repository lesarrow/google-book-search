import React from 'react';

import BookItem from './BookItem';

class BookList extends React.Component {

    buildArrayOfBooks() {

        return this.props.books.map((book, i) => {

            return <BookItem bookTitle={book.title} bookImage={book.image} author={book.author} price={book.price} summary={book.summary} key={i} />
        });
    }

    render() {

        return (
            <div>
                {this.buildArrayOfBooks()}
            </div>
        );
    }
}

export default BookList;