import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/UsersService';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const usersRows = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>
          <Link to={`/users/${user.url}`}>{user.firstName}</Link>
        </td>
        <td>{user.lastName}</td>
        <td>{user.Books.length > 0 ? user.Books.length : 'None'}</td>
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
            <th>Books Owned</th>
          </tr>
        </thead>
        <tbody>{usersRows}</tbody>
      </Table>
    </div>
  ) : (
    <h2 className='mb-4'>No users</h2>
  );
};

export default Users;
