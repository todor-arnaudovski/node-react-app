import { Button } from 'react-bootstrap';
import { deleteUser } from '../../services/UsersService';
import { Link, useNavigate } from 'react-router-dom';

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
    deleteUser(user.id);

    navigate('../users', { replace: true });
  };

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
        <Button variant='danger' onClick={deleteButtonHandler}>
          Delete user
        </Button>
      </div>
    )
  );
};

export default User;
