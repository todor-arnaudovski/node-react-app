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

export async function getUser(firstName) {
  try {
    const response = await fetch(`/api/users/${firstName}`);
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

export async function deleteUser(userId) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`/api/users/${userId}`, requestOptions);
  const user = await response.json();

  return user;
}
