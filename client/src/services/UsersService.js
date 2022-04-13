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

export async function getUser(username) {
  try {
    const response = await fetch(`/api/users/${username}`);
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
  console.log('Created user: ' + user);
};
