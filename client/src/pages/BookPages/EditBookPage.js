import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import EditBookRoute from '../../routes/BookRoutes/EditBookRoute';
import { useLocation } from 'react-router-dom';

const EditBookPage = () => {
  const location = useLocation();
  const { book } = location.state;
  console.log(book)

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Edit Book' />
        <EditBookRoute book={book} />
      </div>
    </div>
  );
};

export default EditBookPage;
