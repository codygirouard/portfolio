import pdf from '../documents/Resume.pdf';

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

export default Nav;
