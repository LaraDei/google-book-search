import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {


  formSubmitted = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.search)
    this.props.handleSubmit(e.currentTarget.search.value)
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.formSubmitted}>
          <div className="search">
            <label for="search">Search:</label>
            <input type="text" name="search" id="search" />
            <input type="submit" value="Submit" /><br />
          </div>
          <div className="filter">
            <div className="one">
            
              <label for="print-type">Print Type:</label>
              <select onChange={e => this.props.handlePrint(e.target.value)}>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
              </select>
            </div>
            <div className="two">
        
              <label for="book-type">Book Type:</label>
              <select onChange={e => this.props.handleBook(e.target.value)}>
                <option value="">No Filter</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
                <option value="free-ebooks">Free Ebooks</option>
                <option value="paid-ebooks">Paid Ebooks</option>
                <option value="ebooks">Ebooks</option>
              </select>
            </div>
          </div>
        </form>

      </div>
    )
  }
}



