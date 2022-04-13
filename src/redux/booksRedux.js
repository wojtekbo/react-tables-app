// selectors
export const getAllBooks = ({books}) => books;

//action names
const createActionName = (name) => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');

// dispatch(removeBook())
// Funkcja ta przyjmuje sam obiekt akcji, a więc informacje, co trzeba zrobić ze stanem.
// Sama jednak dba o to, aby następnie uruchomić funkcję reducer i to w taki sposób, aby przekazać jej aktualny stan i właśnie nasz obiekt akcji.
// Dodatkowo sama dba również o to, aby po jej wywołaniu, to co zwróci, przypisać jako nowy stan.
// Podsumowując, my nigdy nie będziemy uruchamiać bezpośrednio funkcji reducer. Zawsze będziemy korzystali z funkcji pośrednika – dispatch.

//action creators
export const removeBook = (payload) => ({type: REMOVE_BOOK, payload});
export const addBook = (payload) => ({type: ADD_BOOK, payload});
export const updateBooks = (payload) => ({type: UPDATE_BOOKS, payload});
export const fetchBooks = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/books')
      .then((response) => response.json())
      .then((books) => {
        dispatch(updateBooks(books));
      });
  };
};
export const addBookRequest = (newBook) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    };

    fetch('http://localhost:3131/books', options).then(() => dispatch(addBook(newBook)));
  };
};

const reducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return statePart.filter((book) => book.id !== action.payload);
    case ADD_BOOK:
      return [...statePart, action.payload];
    case UPDATE_BOOKS:
      return [...action.payload];
    default:
      // w innym wypadku zwroc stan bez zmian
      return statePart;
  }
};

export default reducer;
