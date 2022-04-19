import BookComponent from '../../components/Books/BookComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../services/BooksService';

const Book = () => {
  const [book, setBook] = useState(null);

  const params = useParams();

  useEffect(() => {
    getBook(params.url).then((book) => {
      setBook(book);
    });
  }, [params.url]);

  return (
    book &&
    <BookComponent book={book} />
  );
};

export default Book;
