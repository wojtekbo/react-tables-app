//import stanu
import {useSelector} from 'react-redux';
//import funkcji zmieniajacych stan
import {useDispatch} from 'react-redux';
import {getAllBooks, removeBook} from '../../redux/booksRedux';

const BookList = () => {
  // pobranie informacji ze stanu
  // const books = useSelector((state) => state.books);
  //pobieranie ze stanu przy urzyci funkcji "filtra"
  const books = useSelector((state) => getAllBooks(state));

  //funkcja pośrednia do edycji stanu
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
