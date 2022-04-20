import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserFormComponent from '../../components/Users/UserFormComponent';
import { updateUser } from '../../services/UsersService';

const CreateUser = ({ user }) => {
  const [inputs, setInputs] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    interests: user.interests,
  });
  const [userUrl, setUserUrl] = useState(user.url);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      interests: inputs.interests,
    };

    updateUser(userData, userUrl);

    setUserUrl(userUrl);
    console.log(userUrl)

    navigate(`../users/${userUrl}`, { replace: true });
  };
  return (
    <UserFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      btnText='Save changes'
      initialValues={user}
    />
  );
};

export default CreateUser;
