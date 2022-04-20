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

export async function getUser(url) {
  try {
    const response = await fetch(`/api/users/${url}`);
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

export async function updateUser(userData, userUrl) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };

  const response = await fetch(`/api/users/${userUrl}`, requestOptions);
  const user = await response.json();

  return user;
  // console.log(`Updating user: ${JSON.stringify(userData)}`)
}

export async function deleteUser(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`/api/users/${url}`, requestOptions);
  const user = await response.json();

  return user;
}
