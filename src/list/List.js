import React, { Component } from 'react';
import './List.css'
import Book from '../book/Book'

export default class List extends Component {
  render() {
    console.log(this.props.bookArray)
     const list = this.props.bookArray.map((book, key) => <Book {...book} key={key}/>)
    return (
      <div className='list'>
        {list}
      </div>
    );
  }
}
  

  