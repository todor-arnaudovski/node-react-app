import { Outlet, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Users = (props) => {
  const users = props.users;
  const usersRows = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>
          <Link to={`/users/${user.firstName}`}>
            {user.firstName}
          </Link>
        </td>
        <td>{user.lastName}</td>
      </tr>
    );
  });

  return (
    <div className='mb-4'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{usersRows}</tbody>
      </Table>
      <Outlet />
    </div>
  );
};

export default Users;
