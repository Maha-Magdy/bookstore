/* eslint-disable  no-unused-vars */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBookAPI } from '../redux/books/books.js';

// stylesheet
import './AddNewBookForm.css';

export default function AddNewBookForm() {
  const [title, setTitle] = useState('');
  const [category, SetCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    if (title.trim() && category.trim()) {
      e.preventDefault();

      const newBook = {
        id: uuidv4(),
        title,
        category,
      };

      dispatch(addBookAPI(newBook));

      setTitle('');
      SetCategory('');
    }
  };

  return (
    <div className="AddNewBookForm">
      <h3 className="margin-0 grey_color">ADD NEW BOOK</h3>
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
          placeholder="Book category"
          name="category"
          value={category}
          required="required"
          onChange={(e) => SetCategory(e.target.value)}
        ></input>

        <button onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </div>
  );
}
