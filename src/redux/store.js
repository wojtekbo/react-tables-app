import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import initialState from './initialState';
import booksReducer from './booksRedux';
import thunk from 'redux-thunk';

// funkcja do modyfikacji magazynu
const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  //referencja do funkcji odpowiedzialnej za modyfikacje magazynu
  reducer,
  //wskazanie danych startowych magazynu
  initialState,
  compose(
    applyMiddleware(thunk),
    //wpis do wtyczki w chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
