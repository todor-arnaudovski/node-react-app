import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/Headers/PageHeader';
import BooksRoute from '../routes/BooksRoute';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Books Page' />
        <BooksRoute />
        <Link to='/books/new' className='btn btn-primary'>
          Create new book
        </Link>
      </div>
    </div>
  );
};

export default BooksPage;
