import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import Users from '../../routes/UserRoutes/Users';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Users Page' />
        <Link to='/users/new' className='btn btn-primary mb-3'>
          Create new user
        </Link>
        <Users />
      </div>
    </div>
  );
};

export default UsersPage;
