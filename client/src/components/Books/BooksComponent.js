import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { removeBookFromUser } from '../../services/BooksService';

const Books = ({ books, hasUserRow }) => {
  const userRow = (book) => {
    if (hasUserRow) {
      if (book.User) {
        return (
          <td>
            <Link to={`/users/${book.User.id}`}>
              {book.User.firstName} {book.User.lastName}
            </Link>
          </td>
        );
      }
      return <td className='text-success'>Available</td>;
    }
  };

  const removeBookHandler = (bookId) => {
    const updateData = {
      bookId: bookId,
    };

    removeBookFromUser(updateData);
  };

  const booksRows = books.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </td>
        <td>{book.author}</td>
        <td>{book.published}</td>
        {userRow(book)}
        {!hasUserRow && (
          <td className='text-center'>
            <Button variant='danger' onClick={() => removeBookHandler(book.id)}>
              Remove
            </Button>
          </td>
        )}
      </tr>
    );
  });

  return (
    <div className='mb-4'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            {hasUserRow && <th>Owned by</th>}
            {!hasUserRow && <th></th>}
          </tr>
        </thead>
        <tbody>{booksRows}</tbody>
      </Table>
    </div>
  );
};

export default Books;
