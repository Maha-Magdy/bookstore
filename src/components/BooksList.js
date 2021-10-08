/* eslint-disable import/no-duplicates, no-unused-vars */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Book from './Book.js';
import { bookList } from '../redux/books/books.js';
import styles from './Books.module.css';

function BooksList(props) {
  const dispatch = useDispatch();
  const { books } = props;

  useEffect(() => {
    if (books.length === 0) {
      axios
        .get(
          'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/U8XOHA6UCsUfkm4CP6xw/books',
        )
        .then((res) => {
          const { data } = res;
          const tempArray = Object.keys(data);
          const finalResult = tempArray.map((key) => {
            const { title } = data[key][0];
            const { category } = data[key][0];
            return {
              id: key,
              title,
              category,
            };
          });
          dispatch(bookList(finalResult));
        });
    }
  }, []);

  if (books !== []) {
    return (
      <ul className={styles.booksBlock}>
        {books.map((book) => (
          <li key={book.id} className={styles.bookBlock}>
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
