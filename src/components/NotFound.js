import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound-page">
        <h1>Page not found</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
};
