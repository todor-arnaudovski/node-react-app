import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import UserRoute from '../../routes/UserRoutes/UserRoute';
import AddBookRoute from '../../routes/UserRoutes/AddBookRoute';

const UserPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Add Book to User Page' />
        <AddBookRoute />
      </div>
    </div>
  );
};

export default UserPage;
