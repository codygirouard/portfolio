import { useEffect, useState } from 'react';
import Logo from '../icons/Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';

type HeaderClass = undefined | 'sticky' | 'hidden';

const Header = () => {
  const [display, setDisplay] = useState<HeaderClass>(undefined);

  useEffect(() => {
    let prevScrollTop: number = 0;

    // hide the scrollbar on scrolldown
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop < 15) {
        setDisplay(undefined);
      } else if (currentScrollTop > prevScrollTop) {
        // scrolled down
        setDisplay('hidden');
      } else {
        // scrolled up
        setDisplay('sticky');
      }
      prevScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={display}>
      <nav className="main-nav">
        <div className="logo">
          <a href="/">
            <Logo letter="C" />
          </a>
        </div>
        <MobileNav />
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
