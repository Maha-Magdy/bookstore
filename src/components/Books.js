/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './Books.module.css';
import BooksList from './BooksList.js';
import AddNewBookForm from './AddNewBookForm.js';

function Books() {
  return (
    <main>
      <BooksList />
      <AddNewBookForm />
    </main>
  );
}

export default Books;