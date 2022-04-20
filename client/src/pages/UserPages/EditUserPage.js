import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import EditUserRoute from '../../routes/UserRoutes/EditUserRoute';
import { useLocation } from 'react-router-dom';

const EditUserPage = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Edit User' />
        <EditUserRoute user={user} />
      </div>
    </div>
  );
};

export default EditUserPage;
