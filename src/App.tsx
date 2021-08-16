import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const Logo = () => {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 84 96"
    >
      <title>Logo</title>

      <g>
        <text
          transform="matrix(1 0 0 1 0 0)"
          fontSize="50"
          fontFamily="sans-serif"
          fontStyle="normal"
          fontWeight="normal"
          id="logo-text"
          y="66"
          x="23"
        >
          C
        </text>
        <polygon
          id="logo-shape"
          strokeWidth="4"
          points="42,3 3,25 3,70 42,93 81,71 81,26 "
        ></polygon>
      </g>
    </svg>
  );
};

const MobileNav = () => {
  const [visible, setVisible] = useState(false);
  const handleToggle = async () => {
    const body = document.getElementById("body");
    body?.classList.toggle("blur");
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
      <aside className={visible ? undefined : "hidden"}>
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

const Body = () => {
  return (
    <div id="body">
      <h2>Content</h2>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const NotFound = () => {
  return <h2>Page not found</h2>;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
