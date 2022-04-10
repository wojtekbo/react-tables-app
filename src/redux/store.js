import {createStore, combineReducers} from 'redux';
import initialState from './initialState';
import booksReducer from './booksRedux';

// funkcja do modyfikacji magazynu
const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  //referencja do funkcji odpowiedzialnej za modyfikacje magazynu
  reducer,
  //wskazanie danych startowych magazynu
  initialState,
  //wpis do wtyczki w chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
