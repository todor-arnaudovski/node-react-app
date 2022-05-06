export async function getUsers() {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error(response.statusText);

    const users = await response.json();

    return users;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error(response.statusText);

    const user = await response.json();

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function createUser(userData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch('/api/users', requestOptions);
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateUser(userData, id) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`/api/users/${id}`, requestOptions);
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(`/api/users/${id}`, requestOptions);
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
}
