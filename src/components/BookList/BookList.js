import React from 'react';

const BookList = ({books, removeBook}) => {
  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              {book.title} by {book.author} <button onClick={() => removeBook(book.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
