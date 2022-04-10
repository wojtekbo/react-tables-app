import React from 'react';
import {useState} from 'react';
//import funkcji zmieniajacych stan
import {useDispatch} from 'react-redux';
import shortid from 'shortid';
import {addBook} from '../../redux/booksRedux';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({id: shortid(), title, author}));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      Author: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button>Add book</button>
    </form>
  );
};

export default BookForm;
