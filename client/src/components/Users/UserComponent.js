const User = ({ user }) => {
  return (
    user &&
    <div>
      <h2 className='h2 text-primary'>{user.firstName} {user.lastName}</h2>
      <h3 className="h3">Interests</h3>
      <p>{user.interests}</p>
    </div>
  );
};

export default User;
