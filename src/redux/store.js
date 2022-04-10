import {createStore} from 'redux';

// funkcja do modyfikacji magazynu
const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return {...state, books: state.books.filter((book) => book.id !== action.payload)};
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action.payload]};
    default:
      // w innym wypadku zwroc stan bez zmian
      return state;
  }
};

//dane startowe magazynu
const initialState = {
  books: [
    {id: 1, title: 'The Witcher', author: 'Andrzej Sapkowski'},
    {id: 2, title: 'Moje zasady', author: 'Wojciech Borkowski'},
  ],
};

const store = createStore(
  //referencja do funkcji odpowiedzialnej za modyfikacje magazynu
  reducer,
  //wskazanie danych startowych magazynu
  initialState,
  //wpis do wtyczki w chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
