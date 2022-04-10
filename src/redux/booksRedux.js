// selectors
export const getAllBooks = ({books}) => books;

//action names
const createActionName = (name) => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');

//action creators
export const removeBook = (payload) => ({type: REMOVE_BOOK, payload});
export const addBook = (payload) => ({type: ADD_BOOK, payload});

const reducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return statePart.filter((book) => book.id !== action.payload);
    case ADD_BOOK:
      return [...statePart, action.payload];
    default:
      // w innym wypadku zwroc stan bez zmian
      return statePart;
  }
};

export default reducer;
