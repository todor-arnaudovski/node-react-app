import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/Headers/PageHeader';
import CreateUserRoute from '../routes/CreateUserRoute';

const CreateUserPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Create User Page' />
        <CreateUserRoute />
      </div>
    </div>
  );
};

export default CreateUserPage;
