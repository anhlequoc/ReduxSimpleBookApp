import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul classsName="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) { //take applicate state - contain array of books - change to props
    //whatever is returned will show up as props inside of BookList
    //for example:
    // return {
    //   asdf: '123' -> this.props.asdf is 123
    // }

    return {
      books: state.books //state nay la state trong redux cua application, co 2 state la books va activeBook
    }
}


//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps (dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch); //có thể gọi this.props.selectBook
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
//connect function: take this component, take this mapStateToProps and return a container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//important notes:
// - when using connect(), whenever the state changes, the component, container is auto re-render with the new list of books
// - Whenever state changes, the object in state function will be assigned as props in component
