import BooksComponent from '../../components/Books/BooksComponent';
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/BooksService';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return <BooksComponent books={books} />;
};

export default Books;
