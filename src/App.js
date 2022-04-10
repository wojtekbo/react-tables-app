import {useState} from 'react';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import shortid from 'shortid';

const App = () => {
  const [books, setBooks] = useState([
    {id: 1, title: 'The Witcher', author: 'Andrzej Sapkowski'},
    {id: 2, title: 'Moje zasady', author: 'Wojciech Borkowski'},
  ]);

  const removeBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const addBook = (newBook) => {
    setBooks([...books, {id: shortid(), title: newBook.title, author: newBook.author}]);
  };

  // removeBook(1);

  return (
    <div className="App">
      <h1>Book App</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
};

export default App;
