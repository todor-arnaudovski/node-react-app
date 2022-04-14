import { useState } from 'react';
import { createUser } from '../../services/UsersService';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const CreateUserComponent = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      interests: inputs.interests,
    };

    createUser(userData);

    navigate('../users', { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='firstName'>
        <Form.Label>First name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter first name'
          onChange={handleChange}
          value={inputs.firstName || ''}
          name='firstName'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='lastName'>
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter last name'
          onChange={handleChange}
          value={inputs.lastName || ''}
          name='lastName'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='interests'>
        <Form.Label>Interests</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Enter interests'
          onChange={handleChange}
          value={inputs.interests || ''}
          name='interests'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Create user
      </Button>
    </Form>
  );
};

export default CreateUserComponent;
