import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getBook, deleteBook } from '../../services/BooksService';
import { toastError, toastSuccess } from '../../services/ToastService';

const Book = () => {
  const [book, setBook] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getBook(params.id)
      .then((book) => {
        setBook(book);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params.id]);

  const deleteButtonHandler = async () => {
    try {
      await deleteBook(book.id);
      toastSuccess('Deleted book');
    } catch (err) {
      toastError(err.message);
    }

    navigate(-1);
  };

  return (
    book && (
      <div>
        <h2 className='h3'>
          <span className='text-primary'>{book.title}</span> by{' '}
          <span className='text-primary'>{book.author}</span>
        </h2>
        <p>Published: {book.published}</p>
        {book.User ? (
          <span className={'d-block mb-3 text-danger'}>
            This book is owned by:{' '}
            <Link to={`/users/${book.User.id}`}>
              {book.User.firstName} {book.User.lastName}
            </Link>
          </span>
        ) : (
          <span className={'d-block mb-3 text-success'}>
            This book is available!
          </span>
        )}
        <div className='mb-4'>
          <Link
            to={`/books/${book.id}/edit`}
            state={{ book: book }}
            className='btn btn-primary me-3'
          >
            Edit book
          </Link>
          <Button variant='danger' onClick={deleteButtonHandler}>
            Delete book
          </Button>
        </div>
      </div>
    )
  );
};

export default Book;
