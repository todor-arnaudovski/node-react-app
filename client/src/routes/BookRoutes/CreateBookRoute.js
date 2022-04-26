import { useState } from 'react';
import { createBook } from '../../services/BooksService';
import { useNavigate } from 'react-router-dom';
import BookFormComponent from '../../components/Books/BookFormComponent';

const CreateBook = () => {
  const [inputs, setInputs] = useState({});
  const [publishedDate, setPublishedDate] = useState(new Date());

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
      published: publishedDate,
    };

    createBook(bookData);

    navigate('../books', { replace: true });
  };

  return (
    <BookFormComponent
      handleChange={handleChange}
      publishedDate={publishedDate}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      btnText='Create User'
    />
  );
};

export default CreateBook;
