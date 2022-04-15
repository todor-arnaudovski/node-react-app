import UserComponent from '../../components/Users/UserComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/UsersService';

const User = () => {
  const [user, setUser] = useState(null);

  const params = useParams();

  useEffect(() => {
    getUser(params.firstName).then((user) => {
      setUser(user);
    });
  }, [params.firstName]);

  return (
    user &&
    <UserComponent user={user} />
  );
};

export default User;
