const User = ({ user }) => {
  return (
    user &&
    <div>
      <h2>User: {user.username}</h2>
    </div>
  );
};

export default User;
