import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/Headers/PageHeader';

const AboutPage = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <PageHeader title='About page' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          tempus quam pellentesque nec.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
