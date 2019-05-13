import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class ReadMoreLess extends Component {
  state = {
    expanded: false
  }

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book } = this.props;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    return (
      <div className="book-description">
        <div className={`content ${toggledClass}`}>
          <span>Description: </span>{book.description}
        </div>
        <span className="more-less-btn" onClick={() => this.setState({ expanded: !expanded })}>
          {expanded ? 'Read Less' : 'Read More'}
        </span>
      </div>
    );
  }
};
