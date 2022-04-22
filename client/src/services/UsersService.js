export async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const users = await response.json();
    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function createUser(userData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };

  const response = await fetch('/api/users', requestOptions);
  const user = await response.json();

  return user;
}

export async function updateUser(userData, id) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };

  const response = await fetch(`/api/users/${id}`, requestOptions);
  const user = await response.json();

  return user;
}

export async function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`/api/users/${id}`, requestOptions);
  const user = await response.json();

  return user;
  
  
}
