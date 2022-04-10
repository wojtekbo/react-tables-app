//import stanu
import {useSelector} from 'react-redux';
//import funkcji zmieniajacych stan
import {useDispatch} from 'react-redux';
import {removeBook} from '../../redux/booksRedux';

const BookList = () => {
  // pobranie ze stanu obiektu books
  const books = useSelector((state) => state.books);
  //"aktywowanie" funkcji zmieniajacych stan
  const dispatch = useDispatch();

  const handleClick = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            {book.title} by {book.author} <button onClick={() => handleClick(book.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
