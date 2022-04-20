import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import CreateUserRoute from '../../routes/UserRoutes/CreateUserRoute';

const CreateUserPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Create User' />
        <CreateUserRoute />
      </div>
    </div>
  );
};

export default CreateUserPage;
