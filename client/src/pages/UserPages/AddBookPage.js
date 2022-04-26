import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import AddBookRoute from '../../routes/UserRoutes/AddBookRoute';
import { useLocation } from 'react-router-dom';

const AddBookPage = () => {
  const location = useLocation();
  const { books, user } = location.state;

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title={`Add Book to ${user.firstName} ${user.lastName}`} />
        <AddBookRoute books={books} userId={user.id} />
      </div>
    </div>
  );
};

export default AddBookPage;
