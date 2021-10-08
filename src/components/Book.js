import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books.js';

// stylesheet
import styles from './Books.module.css';
import './progressCircle.css';

export default function Book(props) {
  const dispatch = useDispatch();

  const removeThisBook = () => {
    dispatch(removeBookAPI(props.book.id));
  };

  return (
    <div>
      <div className={styles.left_block}>
        <div>
          <div>
            <h6 className="margin-0 grey_color text_capitalize">
              {props.book.category}
            </h6>
            <h3 className="margin-0 black_color text_capitalize">
              {props.book.title}
            </h3>
            <p className="margin-0 pale_blue_color">Author Name</p>
          </div>
          <div>
            <ul className="margin-0 d-flex">
              <li className={styles.book_option}>
                <button className="pale_blue_color p_0">Comments</button>
              </li>
              <li className={styles.book_option}>
                <button
                  onClick={removeThisBook}
                  className="pale_blue_color p_0"
                >
                  Remove
                </button>
              </li>
              <li className={styles.book_option}>
                <button className="pale_blue_color p_0">Edit</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.progress_block}>
          <div class="set-size charts-container progress-circle">
            <div class="pie-wrapper progress-45 style-2">
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
              <div class="shadow"></div>
            </div>
          </div>
          <div>
            <p className="black_color">50%</p>
            <p className="grey_color">Completed</p>
          </div>
        </div>
      </div>
      <div className={styles.right_block}>
        <p className="grey_color margin-0">CURRENT CHAPTER</p>
        <p className="black_color">Chapter 10</p>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
