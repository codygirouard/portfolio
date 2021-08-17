import Header from './Header';
import Content from './Content';
import MediaLinks from './MediaLinks';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <MediaLinks footer={false} />
      <Footer />
    </>
  );
};

export default Home;
