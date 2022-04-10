import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';

const App = () => {
  // const addBook = (newBook) => {
  //   setBooks([...books, {id: shortid(), title: newBook.title, author: newBook.author}]);
  // };

  return (
    <div className="App">
      <h1>Book App</h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
