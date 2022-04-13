import Navbar from '../components/Navbar/Navbar';
import UsersRoute from '../routes/UsersRoute';

const AboutPage = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="text-center">Users Page</h1>
        <UsersRoute />
      </div>
    </div>
  );
};

export default AboutPage;
