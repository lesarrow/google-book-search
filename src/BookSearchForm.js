import React from 'react';

import './BookSearchForm.css';


class BookSearchForm extends React.Component {

    static GOOGLEBOOKSAPI = "https://www.googleapis.com/books/v1/volumes?"
    static GOOGLEBOOKSKEY = "AIzaSyCYxmCL7wyhAz-DWN8hXJlLQ2EbdqyFJP4"

    constructor(props) {

        super(props);
        this.state = {
            search: "",
            printType: "All",
            bookType: "no filter"
        }
    }
    
    handleBookSearch(e, setBookSearchResult) {

        e.preventDefault();

        /* build the search url */
        let url = BookSearchForm.GOOGLEBOOKSAPI + `q=${this.state.search}&key=${BookSearchForm.GOOGLEBOOKSKEY}`;

        if (this.state.bookType === "free") {
            url += '&filter=free-ebooks';
        }

        fetch(url).then(response => response.json()).then(data => {
            console.log(data);
            setBookSearchResult(data.items);
        })

    }

    handleSearchChange(e) {
        
        this.setState({
            search: e.target.value
        });
    }

    handlePrintTypeChange(e) {

        this.setState({
            printType: e.target.value
        });
    }

    handleBookTypeChange(e) {
        this.setState({
            bookType: e.target.value
        });
    }

    render() {

        return (
            <form className="book-search-form" onSubmit={e =>this.handleBookSearch(e, this.props.setBookSearchResult)}>
                <div className="book-search-search">
                    <label htmlFor="search">Search: </label>
                    <input type="text" name="search" value={this.state.search} onChange={e => this.handleSearchChange(e)} required />
                    <button type="submit"> Search </button>
                </div>
                <div className="book-search-filters">
                    <label htmlFor="print-type">Print Type: </label>
                    <select value={this.state.printType} name="print-type" onChange={e => this.handlePrintTypeChange(e)}>
                        <option value="All">All</option>
                    </select>
                    <label className="label-book-type" htmlFor="book-type">Book Type: </label>
                    <select name="book-type" value={this.state.bookType} onChange={e => this.handleBookTypeChange(e)}>
                        <option value="no filter">No Filter</option>
                        <option value="free">Free</option>
                    </select>
                </div>                    
            </form>
        );
    }
}

export default BookSearchForm;