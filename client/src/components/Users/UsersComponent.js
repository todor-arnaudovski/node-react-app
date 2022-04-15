import { Outlet, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Users = ({ users }) => {
  const usersRows = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>
          <Link to={`/users/${user.firstName}`}>{user.firstName}</Link>
        </td>
        <td>{user.lastName}</td>
        <td>3</td>
      </tr>
    );
  });

  return users.length > 0 ? (
    <div className='mb-4'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Rented Movies</th>
          </tr>
        </thead>
        <tbody>{usersRows}</tbody>
      </Table>
      <Outlet />
    </div>
  ) : (
    <h2 className='mb-4'>No users</h2>
  );
};

export default Users;
