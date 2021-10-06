/* eslint-disable no-unused-vars */

import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import Book from './Book.js';

function BooksList(props) {
  const { books } = props;

  if (books !== []) {
    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

export default connect(mapStateToProps)(BooksList);