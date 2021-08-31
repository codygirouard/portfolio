import Header from './header/Header';
import Content from './sections/Content';
import { MediaLinks } from './icons/MediaLinks';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import Logo from './icons/Logo';

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
  const [isMounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(false);
  const [char, setChar] = useState('Z');
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!play) {
      return;
    }

    const prevChar = (c: string) => {
      return String.fromCharCode(c.charCodeAt(0) - 1);
    };

    setTimeout(() => {
      if (char.charCodeAt(0) > 67) {
        // char is somewhere between D and Z
        setChar(prevChar(char));
      } else {
        // char === C, transition to homepage
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    }, 700 / (char.charCodeAt(0) - 67));
  }, [char, play]);

  useEffect(() => {
    const loadingDiv = divRef.current;

    if (!loadingDiv) {
      return;
    }

    if (!isMounted) {
      setTimeout(() => {
        setPlay(true);
        setMounted(true);
      }, 300);

      return;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        loadingDiv.classList.add('pause');
        setPlay(false);
      } else {
        loadingDiv.classList.remove('pause');
        setPlay(true);
      }
    };

    handleVisibilityChange();

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMounted]);

  if (loading) {
    return (
      <div
        ref={divRef}
        className={`loading-screen 
        ${char.charCodeAt(0) === 67 ? ' fade' : ''} ${play ? 'play' : 'pause'}`}
      >
        <Logo letter={char} />
      </div>
    );
  }

  return <Home />;
};

export default HomePage;
