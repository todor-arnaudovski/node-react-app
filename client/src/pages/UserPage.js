import Navbar from '../components/Navbar/Navbar';
import UserRoute from '../routes/UserRoute';

const AboutPage = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="text-center">User Page</h1>
        <UserRoute />
      </div>
    </div>
  );
};

export default AboutPage;
