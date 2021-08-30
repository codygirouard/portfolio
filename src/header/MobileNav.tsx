import { useEffect, useState } from 'react';
import pdf from '../documents/Resume.pdf';

const MobileNav = () => {
  const [visible, setVisible] = useState(false);

  // opens and closes the mobile nav menu
  // prevent scrolling by setting the body overflow to hidden
  const handleToggle = () => {
    const content = document.getElementById('content');
    const body = document.body;
    if (visible) {
      // close nav
      body.style.overflow = 'auto';
    } else {
      // open nav
      body.style.overflow = 'hidden';
      document.documentElement.style.overflowX = 'visible';
    }

    content?.classList.toggle('blur');
    setVisible(!visible);
  };

  useEffect(() => {
    // exit the mobile nav whenever the page content is clicked (outside of the mobile nav)
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
    <div className='mobile-nav'>
      <label htmlFor='ham-button' className='hamburger'>
        <input
          type='checkbox'
          id='ham-button'
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
              <a href='#about' onClick={handleToggle}>
                About
              </a>
            </li>
            <li>
              <a href='#projects' onClick={handleToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={handleToggle}>
                Contact
              </a>
            </li>
          </ul>
          <div className='resume-button'>
            <a className='button' href={pdf}>
              Resume
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MobileNav;
