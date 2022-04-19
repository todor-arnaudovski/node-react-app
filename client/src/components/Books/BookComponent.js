import { Button } from 'react-bootstrap';
import { deleteBook } from '../../services/BooksService';
import { Link, useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
  let user = book.User;

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
        {user ? (
          <span className={'d-block mb-3 text-danger'}>
            This book is owned by: <Link to={`/users/${user.url}`}>{user.firstName} {user.lastName}</Link>
          </span>
        ) : (
          <span className={'d-block mb-3 text-success'}>
            This book is available!
          </span>
        )}
        <Button variant='danger' onClick={deleteButtonHandler}>
          Delete book
        </Button>
      </div>
    )
  );
};

export default Book;
