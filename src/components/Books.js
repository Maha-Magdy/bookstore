/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BooksList from './BooksList.js';
import AddNewBookForm from './AddNewBookForm.js';

function Books() {
  const [books, setBooks] = useState([{
    id: 1,
    category: 'Action',
    title: 'Treasure Island',
    writer: 'Robert Louis Stevenson',
  }]);

  return (
    <main>
      <BooksList books={books}/>
      <AddNewBookForm />
    </main>
  );
}

export default Books;