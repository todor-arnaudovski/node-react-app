import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserFormComponent from '../../components/Users/UserFormComponent';
import { updateUser } from '../../services/UsersService';
import { toastError, toastSuccess } from '../../services/ToastService';

const EditUserRoute = ({ user }) => {
  const [inputs, setInputs] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    interests: user.interests,
  });
  const [userId, setUserId] = useState(user.id);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      interests: inputs.interests,
    };

    try {
      await updateUser(userData, userId);
      toastSuccess('User updated');
    } catch (err) {
      toastError(err.message);
    }

    setUserId(userId);

    navigate(`../users/${userId}`, { replace: true });
  };
  return (
    <UserFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      btnText='Save changes'
    />
  );
};

export default EditUserRoute;
