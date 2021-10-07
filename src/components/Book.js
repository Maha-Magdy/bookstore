import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books.js';
import styles from './Books.module.css';

export default function Book(props) {
  const dispatch = useDispatch();

  const removeThisBook = () => {
    dispatch(removeBookAPI(props.book.id));
  };

  return (
    <div>
      <div>
        <h6 className="margin-0 grey_color text_capitalize">
          {props.book.category}
        </h6>
        <h3 className="margin-0 black_color text_capitalize">
          {props.book.title}
        </h3>
        <p className="margin-0">{props.book.author}</p>
      </div>
      <div>
        <ul className="margin-0 d-flex">
          <li className={styles.book_option}>
            <button onClick={removeThisBook} className="blue_color p_0">
              Remove
            </button>
          </li>
          <li className={styles.book_option}>
            <button className="blue_color p_0">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
