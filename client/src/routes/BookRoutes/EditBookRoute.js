import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookFormComponent from '../../components/Books/BookFormComponent';
import { updateBook } from '../../services/BooksService';

const EditBookRoute = ({ book }) => {
  const [inputs, setInputs] = useState({
    title: book.title,
    author: book.author,
    published: book.published,
  });
  const [publishedDate, setPublishedDate] = useState(new Date(book.published));
  const [bookId, setBookId] = useState(book.id);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    setPublishedDate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      title: inputs.title,
      author: inputs.author,
      published: inputs.published,
    };

    updateBook(bookData, bookId);

    setBookId(bookId);

    navigate(`../books/${bookId}`, { replace: true });
  };
  return (
    <BookFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      publishedDate={publishedDate}
      handleDateChange={handleDateChange}
      btnText='Save changes'
    />
  );
};

export default EditBookRoute;
