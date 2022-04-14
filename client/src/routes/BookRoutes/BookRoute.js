import BookComponent from '../../components/Books/BookComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../services/BooksService';

const Book = () => {
  const [book, setBook] = useState(null);

  const params = useParams();

  useEffect(() => {
    getBook(params.title).then((book) => {
      setBook(book);
    });
  }, [params.title]);

  return <BookComponent book={book} />;
};

export default Book;
