import { useEffect, useState } from 'react';
import Logo from './Logo';
import pdf from './documents/Resume.pdf';

const MobileNav = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    const content = document.getElementById('content');
    const body = document.body;
    if (visible) {
      // closing the mobile nav menu
      body.style.overflow = 'auto';
    } else {
      // opening the mobile nav menu
      body.style.overflow = 'hidden';
    }

    content?.classList.toggle('blur');
    setVisible(!visible);
  };

  useEffect(() => {
    const content = document.getElementById('content');

    const exitMobileNav = (event: MouseEvent) => {
      setVisible(false);
      content?.classList.remove('blur');
      document.body.style.overflow = 'auto';
    };

    content?.addEventListener('click', exitMobileNav);

    return () => {
      content?.removeEventListener('click', exitMobileNav);
    };
  }, []);

  return (
    <div className="mobile-nav">
      <label htmlFor="ham-button" className="hamburger">
        <input
          type="checkbox"
          id="ham-button"
          onChange={handleToggle}
          checked={visible}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <aside className={visible ? undefined : 'hidden'}>
        <nav>
          <ul>
            <li>
              <a href="#about" onClick={handleToggle}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleToggle}>
                Contact
              </a>
            </li>
          </ul>
          <div className="resume-button">
            <a className="button" href={pdf}>
              Resume
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="resume-button">
        <a className="button" href={pdf}>
          Resume
        </a>
      </div>
    </div>
  );
};

type HeaderClass = undefined | 'sticky' | 'hidden';

const Header = () => {
  const [display, setDisplay] = useState<HeaderClass>(undefined);

  useEffect(() => {
    let prevScrollTop: number = 0;

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
