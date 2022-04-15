import { Button } from 'react-bootstrap';
import { deleteUser } from '../../services/UsersService';
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
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
        <Button variant='danger' onClick={deleteButtonHandler}>
          Delete user
        </Button>
      </div>
    )
  );
};

export default User;
