import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
          font-size="50"
          font-family="sans-serif"
          font-style="normal"
          font-weight="normal"
          id="logo-text"
          y="65"
          x="24"
        >
          C
        </text>
        <polygon
          id="logo-shape"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="42,3 3,25 3,70 42,93 81,71 81,26 "
        ></polygon>
      </g>
    </svg>
  );
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav>
        <div className="menu">
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
        </div>
        <div className="resume">
          <a href="#!">Resume</a>
        </div>
      </nav>
    </header>
  );
};

const Home = () => {
  return <Header />;
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
