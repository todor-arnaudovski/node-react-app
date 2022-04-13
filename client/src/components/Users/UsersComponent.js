import { Outlet, Link } from 'react-router-dom';
import CreateUserComponent from '../Users/CreateUserComponent';

const Users = (props) => {
  const users = props.users;
  const usersList = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/users/${user.username}`} key={user.username}>
          {user.username}
        </Link>
      </li>
    );
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <ul className="list-unstyled">{usersList}</ul>
      <div>
        <CreateUserComponent />
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
