// import UserComponent from '../../components/Users/UserComponent';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AddBookComponent from '../../components/Users/AddBookComponent';
import BooksComponent from '../../components/Books/BooksComponent';
import { getUser, deleteUser } from '../../services/UsersService';
import { getBooks } from '../../services/BooksService';

const User = () => {
  const [user, setUser] = useState(null);
  const [userBooks, setUserBooks] = useState([]);
  const [availableBooks, setAvailableBooks] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getUser(params.id).then((user) => {
      setUser(user);
      setUserBooks(user.Books);
    });
    
    getBooks(true).then((books) => {
      setAvailableBooks(books);
    });
  }, [params.id]);

  const deleteButtonHandler = () => {
    deleteUser(user.id);

    navigate('../users', { replace: true });
  };

  const addBookHandler = () => {
    console.log('Will toggle add book component');
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
          <BooksComponent books={userBooks} />
        ) : (
          <p className='text-danger'>This user does not have any books</p>
        )}
        <div className='mb-4'>
          <Link
            to={`/users/${user.url}/edit`}
            state={{ user: user }}
            className='btn btn-primary me-3'
          >
            Edit user
          </Link>
          <Button variant='primary' className='me-3' onClick={addBookHandler}>
            Add book
          </Button>
          <Button variant='danger' onClick={deleteButtonHandler}>
            Delete user
          </Button>
        </div>
        {availableBooks ? (
          <AddBookComponent availableBooks={availableBooks} userId={user.id} />
        ) : (
          <h3 className='text-danger'>
            Currently there are no available books.
          </h3>
        )}
      </div>
    )
  );
};

export default User;
