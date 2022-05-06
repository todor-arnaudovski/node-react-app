import { useState } from 'react';
import { createBook } from '../../services/BooksService';
import { useNavigate } from 'react-router-dom';
import BookFormComponent from '../../components/Books/BookFormComponent';
import { toastError, toastSuccess } from '../../services/ToastService';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title: inputs.title,
      author: inputs.author,
      published: publishedDate,
    };

    try {
      await createBook(bookData);
      toastSuccess('Book created');
    } catch (err) {
      toastError(err.message);
    }
    
    navigate('../books', { replace: true });
  };

  return (
    <BookFormComponent
      handleChange={handleChange}
      publishedDate={publishedDate}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      btnText='Create Book'
    />
  );
};

export default CreateBook;
