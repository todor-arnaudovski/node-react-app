import { Button } from 'react-bootstrap';
import { deleteBook } from '../../services/BooksService';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
  const navigate = useNavigate();

  const deleteButtonHandler = () => {
    deleteBook(book.id);

    navigate('../books', { replace: true });
  };

  return (
    book && (
      <div>
        <h2 className='h3'>
          <span className='text-primary'>{book.title}</span> by{' '}
          <span className='text-success'>{book.author}</span>
        </h2>
        <p>Published: {book.published}</p>
        <Button variant='danger' onClick={deleteButtonHandler}>
          Delete book
        </Button>
      </div>
    )
  );
};

export default Book;
