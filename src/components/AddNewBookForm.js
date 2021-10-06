/* eslint-disable  no-unused-vars */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books.js';

export default function AddNewBookForm() {
  const [title, setTitle] = useState('');
  const [author, SetAuthor] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    if (title.trim() && author.trim()) {
      e.preventDefault();

      const newBook = {
        id: uuidv4(),
        title,
        author,
      };

      dispatch(addBook(newBook));

      setTitle('');
      SetAuthor('');
    }
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          required="required"
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Book author"
          name="author"
          value={author}
          required="required"
          onChange={(e) => SetAuthor(e.target.value)}
        ></input>

        <button onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </div>
  );
}
