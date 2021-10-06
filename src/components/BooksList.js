/* eslint-disable no-unused-vars */

import Book from './Book.js';

export default function BooksList(props) {
  return (
    <ul>
      {props.books.map((book) => (
          <li key="{book.id}">
            <Book book={book} />
          </li>
      ))}
    </ul>
  );
}
