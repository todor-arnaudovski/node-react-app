import { useState } from 'react';
import { createUser } from '../../services/UsersService';

const CreateUserComponent = () => {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInputChange = (e) => {
    setUserame(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    createUser(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default CreateUserComponent;
