import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Books = ({ books }) => {
  const booksRows = books.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>
          <Link to={`/books/${book.url}`}>{book.title}</Link>
        </td>
        <td>{book.author}</td>
        <td>{book.published}</td>
        { book.User ?
          <td>
            <Link to={`/users/${book.User.url}`}>
              {book.User.firstName} {book.User.lastName}
            </Link>
          </td> :
          <td className='text-success'>Available</td>
        }
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
            <th>Owned by</th>
          </tr>
        </thead>
        <tbody>{booksRows}</tbody>
      </Table>
    </div>
  );
};

export default Books;
