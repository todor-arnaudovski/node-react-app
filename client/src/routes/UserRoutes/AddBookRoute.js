import AddBookComponent from '../../components/Users/AddBookComponent';
import { useState, useEffect } from 'react';
import { getBooks } from '../../services/BooksService';

const AddBookRoute = () => {
  const [availableBooks, setAvailableBooks] = useState(null);

  useEffect(() => {
    getBooks(true).then((books) => {
      setAvailableBooks(books);
    });
  }, []);

  return <AddBookComponent availableBooks={availableBooks} />;
};

export default AddBookRoute;
