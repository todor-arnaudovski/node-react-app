import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookFormComponent = ({
  handleChange,
  publishedDate,
  handleDateChange,
  handleSubmit,
  inputs,
  btnText,
}) => {
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
        <DatePicker
          selected={publishedDate}
          onChange={handleDateChange}
          className='form-control'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        {btnText}
      </Button>
    </Form>
  );
};

export default BookFormComponent;
