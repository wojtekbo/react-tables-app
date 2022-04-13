import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import {fetchBooks} from './redux/booksRedux';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div className="App">
      <h1>Book App</h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
