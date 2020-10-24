import React, { Component } from 'react';
import './Book.css'

export default class Book extends Component{
  render() {
    return (
      <div className='book'>
        <h2>{this.props.volumeInfo.title}</h2>

        <div className="group">
          <img  src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
          <div>
            <p>Author: {(this.props.volumeInfo.hasOwnProperty('authors')) && this.props.volumeInfo.authors[0] }</p>
            <p>Price: ${((this.props.saleInfo.saleability === "FOR_SALE") || this.props.saleInfo.saleability === "FOR_SALE_AND_RENTAL") && this.props.saleInfo.listPrice.amount}</p>
            <br/>
            <p>{this.props.volumeInfo.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}
  
  