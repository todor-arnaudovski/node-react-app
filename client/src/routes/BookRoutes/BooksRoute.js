import BooksComponent from '../../components/Books/BooksComponent';
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/BooksService';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return books.length > 0 && <BooksComponent books={books} hasUserRow={true} />;
};

export default Books;
