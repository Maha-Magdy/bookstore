import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books.js';

export const rootReducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;