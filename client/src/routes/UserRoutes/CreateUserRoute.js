import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserFormComponent from '../../components/Users/UserFormComponent';
import { createUser } from '../../services/UsersService';
import { toastError, toastSuccess } from '../../services/ToastService';

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

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
      await createUser(userData);
      toastSuccess('User created');
    } catch (err) {
      toastError(err.message);
    }

    navigate('../users', { replace: true });
  };
  return (
    <UserFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      btnText='Create User'
    />
  );
};

export default CreateUser;
