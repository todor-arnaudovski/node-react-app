const User = ({ user }) => {
  return (
    user &&
    <div>
      <h2>User: {user.firstName} {user.lastName}</h2>
      <p>Interests: {user.interests}</p>
    </div>
  );
};

export default User;
