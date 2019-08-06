import React from 'react';

import './BookItem.css';

class BookItem extends React.Component {

    render() {

        return (

            <div className="book-item">
                <h2 className="book-title">{this.props.bookTitle}</h2>
                <div className="book-details">
                    <div className="book-image-container">
                        <img className="book-image" alt="no book image found" src={this.props.bookImage} />
                    </div>
                    <div className="book-details-text">
                        <p className="book-author">Author: {this.props.author}</p>
                        <p className="book-price">Price: {this.props.price}</p>
                        <p className="book-summary">{this.props.summary}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookItem;