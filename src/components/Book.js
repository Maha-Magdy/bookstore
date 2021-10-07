import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books.js';

export default function Book(props) {
  const dispatch = useDispatch();

  const removeThisBook = () => {
    dispatch(removeBookAPI(props.book.id));
  };

  return (
    <div>
      <div>
        <h6>{props.book.category}</h6>
        <h3>{props.book.title}</h3>
        <p>{props.book.author}</p>
      </div>
      <div>
          <ul>
              <button onClick={removeThisBook}>Remove</button>
              <button>Edit</button>
          </ul>
      </div>
    </div>
  );
}
