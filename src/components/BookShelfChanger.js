import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  changeBookShelf = (e) => {
    this.props.onUpdate(e.target.value)
  }

  render() {
    const book = this.props.book;
    return (
      <div className="book-shelf-changer">
        <select onChange={this.changeBookShelf} value={book.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
};
