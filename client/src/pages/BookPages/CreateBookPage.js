import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import CreateBookRoute from '../../routes/BookRoutes/CreateBookRoute';

const CreateBookPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Create Book Page' />
        <CreateBookRoute />
      </div>
    </div>
  );
};

export default CreateBookPage;
