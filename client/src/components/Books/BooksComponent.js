import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Books = (props) => {
  const books = props.books;
  const booksRows = books.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>
          <Link to={`/books/${book.url}`}>{book.title}</Link>
        </td>
        <td>{book.author}</td>
        <td>
          <Link to={`/users/${book.User.url}`}>{book.User.firstName}</Link>
        </td>
        <td>{book.published}</td>
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
            <th>Owned by:</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>{booksRows}</tbody>
      </Table>
    </div>
  );
};

export default Books;
