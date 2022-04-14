import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import UserRoute from '../../routes/UserRoutes/UserRoute';

const UserPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='User Page' />
        <UserRoute />
      </div>
    </div>
  );
};

export default UserPage;
