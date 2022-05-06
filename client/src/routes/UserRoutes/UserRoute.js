import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BooksComponent from '../../components/Books/BooksComponent';
import { getUser, deleteUser } from '../../services/UsersService';
import { getBooks, removeBookFromUser } from '../../services/BooksService';
import { toastError, toastSuccess } from '../../services/ToastService';

const UserRoute = () => {
  const [user, setUser] = useState(null);
  const [userBooks, setUserBooks] = useState([]);
  const [availableBooks, setAvailableBooks] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getUser(params.id)
      .then((user) => {
        setUser(user);
        setUserBooks(user.Books);
      })
      .catch((err) => {
        toastError(err.message);
      });

    getBooks(true)
      .then((books) => {
        setAvailableBooks(books);
      })
      .catch((err) => {
        toastError(err.message);
      });
  }, [params.id]);

  const removeBookHandler = async (bookId) => {
    const updateData = {
      bookId: bookId,
    };

    try {
      await removeBookFromUser(updateData);
      toastSuccess('Removed book from user');

      /* exclude removed book from userBooks list without making another api call
      and re-render component */
      setUserBooks(userBooks.filter((book) => book.id !== bookId));
    } catch (err) {
      toastError(err.message);
    }
  };

  const deleteButtonHandler = async () => {
    try {
      await deleteUser(user.id);

      toastSuccess('User deleted');

      navigate('../users', { replace: true });
    } catch (err) {
      toastError(err.message);
    }
  };

  return (
    user && (
      <div>
        <h2 className='h2 mb-4'>
          Name:{' '}
          <span className='text-primary'>
            {user.firstName} {user.lastName}
          </span>
        </h2>
        <h3 className='h3'>Interests</h3>
        <p className='mb-4'>{user.interests}</p>
        <h3 className='h3'>This user owns the following books:</h3>
        {userBooks.length > 0 ? (
          <BooksComponent
            books={userBooks}
            removeBookHandler={removeBookHandler}
          />
        ) : (
          <p className='text-danger'>This user does not have any books</p>
        )}
        <div className='mb-4'>
          <Link
            to={`/users/${user.id}/edit`}
            state={{ user: user }}
            className='btn btn-primary me-3'
          >
            Edit user
          </Link>
          <Link
            to={`/users/${user.id}/addBook`}
            state={{ books: availableBooks, user: user }}
            className='btn btn-primary me-3'
          >
            Add book
          </Link>
          <Button variant='danger' onClick={deleteButtonHandler}>
            Delete user
          </Button>
        </div>
      </div>
    )
  );
};

export default UserRoute;
