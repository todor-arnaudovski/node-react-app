import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { addBookToUser } from '../../services/BooksService';
import { toastError, toastSuccess } from '../../services/ToastService';

const AddBookRoute = ({ books, userId }) => {
  const [selectedBookId, setSelectedBookId] = useState('');

  let navigate = useNavigate();

  const handleBookSelect = (e) => {
    setSelectedBookId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      bookId: selectedBookId ? selectedBookId : null,
      userId: userId,
    };

    try {
      addBookToUser(updateData);

      toastSuccess('Added book to user');

      navigate(`../users/${userId}`, { replace: true });
    } catch (err) {
      toastError(err.message);
    }
  };

  const bookList = books.map((book) => {
    return (
      <option key={book.id} value={book.id}>
        {book.title}
      </option>
    );
  });

  return books.length > 0 ? (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='availableBook'>
        <Form.Label>Select available book:</Form.Label>
        <Form.Select
          onChange={handleBookSelect}
          value={selectedBookId}
          aria-label='Select available book'
          required
        >
          <option value='' disabled>
            Select book
          </option>
          {bookList}
        </Form.Select>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add book
      </Button>
    </Form>
  ) : (
    <p className='text-danger'>There are no available books</p>
  );
};

export default AddBookRoute;
