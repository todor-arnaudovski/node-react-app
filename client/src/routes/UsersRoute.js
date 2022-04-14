import UsersComponent from '../components/Users/UsersComponent';
import { useEffect, useState } from 'react';
import { getUsers } from '../services/UsersService';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return <UsersComponent users={users} />;
};

export default Users;
