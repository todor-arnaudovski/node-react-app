import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Headers/PageHeader';
import BooksRoute from '../../routes/BookRoutes/BooksRoute';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Books Page' />
        <Link to='/books/new' className='btn btn-primary mb-4'>
          Create new book
        </Link>
        <BooksRoute />
      </div>
    </div>
  );
};

export default BooksPage;
