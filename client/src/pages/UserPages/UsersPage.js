import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import UsersRoute from '../../routes/UserRoutes/UsersRoute';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Users Page' />
        <UsersRoute />
        <Link to='/users/new' className='btn btn-primary'>
          Create new user
        </Link>
      </div>
    </div>
  );
};

export default UsersPage;
