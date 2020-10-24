import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {


  formSubmitted = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.bookName)
    this.props.handleSubmit(e.currentTarget.bookName.value)
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.formSubmitted}>
          <div className="header-2">
            Search: <input type="text" name="bookName" id="bookName" />
            <input type="submit" value="Submit" /><br />
          </div>
          <div className="header-3">
            Print Type:
        <select onChange={e => this.props.handlePrint(e.target.value)}>
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
          Book Type:
        <select onChange={e => this.props.handleBook(e.target.value)}>
              <option value="">No Filter</option>
              <option value="partial">Partial</option>
              <option value="full">Full</option>
              <option value="free-ebooks">Free Ebooks</option>
              <option value="paid-ebooks">Paid Ebooks</option>
              <option value="ebooks">Ebooks</option>
            </select>
          </div>
        </form>

      </div>
    )
  }
}



