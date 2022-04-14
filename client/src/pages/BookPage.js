import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/Headers/PageHeader';
import BookRoute from '../routes/BookRoute';

const BookPage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Book Page' />
        <BookRoute />
      </div>
    </div>
  );
};

export default BookPage;
