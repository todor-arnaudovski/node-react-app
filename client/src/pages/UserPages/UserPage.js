import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import User from '../../routes/UserRoutes/User';

const UserPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='User Page' />
        <User />
      </div>
    </div>
  );
};

export default UserPage;
