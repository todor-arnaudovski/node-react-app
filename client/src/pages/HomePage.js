import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/Headers/PageHeader';

const HomePage = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <PageHeader title='Home page' />
        <p>This is the home page! Feel free to look around...</p>
      </div>
    </div>
  );
};

export default HomePage;
