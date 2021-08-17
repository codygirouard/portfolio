import { useState } from 'react';
import Logo from './Logo';

const MobileNav = () => {
  const [visible, setVisible] = useState(false);
  const handleToggle = async () => {
    const body = document.getElementById('body');
    body?.classList.toggle('blur');
    setVisible(!visible);
  };

  return (
    <div className="mobile-nav">
      <label htmlFor="ham-button" className="hamburger">
        <input type="checkbox" id="ham-button" onClick={handleToggle} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <aside className={visible ? undefined : 'hidden'}>
        <nav>
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
            <a href="/resume.pdf">Resume</a>
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
        <a href="/resume.pdf">Resume</a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>
        <MobileNav />
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
