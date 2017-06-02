import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Select a book to get info</div>
    }

    return (
      <div>
        <h3>Details for: </h3>
        Title: {this.props.book.title}
        Pages: {this.props.book.pages}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
