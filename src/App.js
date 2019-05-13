import React from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import Search from './components/Search';
import NotFound from './components/NotFound';

import './App.css';

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <ListBooks
                  books={this.state.allBooks}
                  onChange={this.updateShelf}
                />
              )}
            />
            <Route
              exact path="/search"
              render={({ history }) => (
                <Search
                  myBooks={this.state.allBooks}
                  onChange={this.updateShelf}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp;
