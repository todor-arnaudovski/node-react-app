import { useState } from 'react';
import { createBook } from '../../services/BooksService';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateBookComponent = () => {
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
  }

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
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='title'>
        <Form.Label>Book title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter book title'
          onChange={handleChange}
          value={inputs.title || ''}
          name='title'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='author'>
        <Form.Label>Book author</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter book author'
          onChange={handleChange}
          value={inputs.author || ''}
          name='author'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='interests'>
        <Form.Label>Published</Form.Label>
        <DatePicker selected={publishedDate} onChange={handleDateChange} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Create book
      </Button>
    </Form>
  );
};

export default CreateBookComponent;
