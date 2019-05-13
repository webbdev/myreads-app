import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import BookShelf from './BookShelf';

export default class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        const books = this.props.books;

        const shelves = [
            { title: 'Currently Reading', type: 'currentlyReading' },
            { title: 'Want To Read', type: 'wantToRead' },
            { title: 'Read', type: 'read' }
        ];

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf, index) => (
                            <BookShelf
                                books={books.filter(book => book.shelf === shelf.type)}
                                title={shelf.title}
                                key={index}
                                onChangeShelf={this.props.onChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a Book</Link>
                </div>
            </div>
        );
    }
};
