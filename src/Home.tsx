import Header from './Header';
import Content from './Content';
import { MediaLinks } from './MediaLinks';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Logo from './Logo';

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

export { Home };

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(false);
  const [char, setChar] = useState('Z');

  useEffect(() => {
    function prevChar(c: string) {
      return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    if (char.charCodeAt(0) === 90) {
      setTimeout(() => {
        setChar(prevChar(char));
        setPlay(true);
      }, 500);
    } else {
      setTimeout(() => {
        if (char.charCodeAt(0) > 67) {
          setChar(prevChar(char));
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }
      }, 700 / (char.charCodeAt(0) - 67));
    }
  }, [char]);

  if (loading) {
    return (
      <div
        className={`loading-screen ${char.charCodeAt(0) === 67 ? 'fade' : ''} ${
          play ? 'play' : ''
        }`}
      >
        <Logo letter={char} />
      </div>
    );
  }

  return <Home />;
};

export default HomePage;
