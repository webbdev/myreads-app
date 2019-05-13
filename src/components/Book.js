import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import BookShelfChanger from './BookShelfChanger';
import ReadMoreLess from './ReadMoreLess';

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdate: PropTypes.func.isRequired
    }

    render() {
        const { book, onUpdate } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${
                                    book.imageLinks
                                        ? book.imageLinks.thumbnail
                                        : 'https://i.ibb.co/njjsHnb/cover-book.png'}")`
                            }}>
                        </div>
                        <BookShelfChanger
                            book={book}
                            onUpdate={onUpdate}
                        />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    <div className="book-category"><span>Category:</span> {book.categories}</div>
                    <ReadMoreLess
                        book={book}
                    />
                </div>
            </li>
        );
    }
};