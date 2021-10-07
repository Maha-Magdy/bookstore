/* eslint-disable  quote-props */
import axios from 'axios';

const BOOK_LIST = 'bookStore/books/BOOK_LIST';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_LIST:
      return [...state, ...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const bookList = (payload) => ({
  type: BOOK_LIST,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const addBookAPI = (payload) => function (dispatch) {
  axios
    .post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/U8XOHA6UCsUfkm4CP6xw/books',
      {
        item_id: payload.id,
        title: payload.title,
        category: payload.category,
      },
    )
    .then(() => {
      dispatch(addBook(payload));
    });
};

export const removeBookAPI = (payload) => function (dispatch) {
  axios
    .delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/U8XOHA6UCsUfkm4CP6xw/books/${payload}`,
    )
    .then(() => {
      dispatch(removeBook(payload));
    });
};

export default booksReducer;
