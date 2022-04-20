import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { addSelectedBook } from '../../services/BooksService';

const AddBookComponent = ({ availableBooks: books, userId }) => {
  const bookList = books.map((book) => {
    return (
      <option key={book.id} value={book.id}>
        {book.title}
      </option>
    );
  });

  const [selectedBookId, setSelectedBookId] = useState('');

  const handleBookSelect = (e) => {
    setSelectedBookId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateData = {
      bookId: selectedBookId ? selectedBookId : null,
      userId: userId,
    };

    addSelectedBook(updateData);
  };

  return (
    books && (
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
    )
  );
};

export default AddBookComponent;
