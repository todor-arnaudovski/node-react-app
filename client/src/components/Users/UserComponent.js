import { Button } from 'react-bootstrap';
import { deleteUser } from '../../services/UsersService';
import { Link, useNavigate } from 'react-router-dom';
import AddBookComponent from '../Users/AddBookComponent';
import { useState, useEffect } from 'react';
import { getBooks } from '../../services/BooksService';

const User = ({ user }) => {
  const books = user.Books;
  const bookList =
    books.length > 0
      ? books.map((book) => {
          return (
            <li key={book.id}>
              <Link to={`/books/${book.url}`}>{book.title}</Link>
            </li>
          );
        })
      : null;

  const navigate = useNavigate();

  const deleteButtonHandler = () => {
    deleteUser(user.url);

    navigate('../users', { replace: true });
  };

  const addBookHandler = () => {
    console.log('Will toggle add book component');
  };

  const [availableBooks, setAvailableBooks] = useState(null);

  useEffect(() => {
    getBooks(true).then((books) => {
      setAvailableBooks(books);
    });
  }, []);

  return (
    user && (
      <div>
        <h2 className='h2 text-primary'>
          {user.firstName} {user.lastName}
        </h2>
        <h3 className='h3'>Interests</h3>
        <p>{user.interests}</p>
        <h3 className='h3'>This user owns the following books:</h3>
        {bookList ? (
          <ul>{bookList}</ul>
        ) : (
          <p className='text-danger'>This user does not have any books</p>
        )}
        <div className='mb-4'>
        <Button variant='primary' className='me-3' onClick={addBookHandler}>
          Add book
        </Button>
        <Button variant='danger' onClick={deleteButtonHandler}>
          Delete user
        </Button>
        </div>
        {availableBooks ? (
          <AddBookComponent availableBooks={availableBooks} userId={user.id}/>
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
