import { Icon } from './MediaLinks';

const Intro = () => {
  return (
    <section className="intro">
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2>Cody Girouard.</h2>
      </div>
      <div>
        <h3>I create things for the web.</h3>
      </div>
      <div>
        <p>
          I'm a software engineer focused on creating and building exceptional
          digital experiences.
        </p>
      </div>
      <div>
        <a className="button" href="mailto:girouardcodya@gmail.com">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section>
      <h2 className="title">About Me</h2>
      <div className="body">
        <div className="about">
          <div>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML &amp; CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a
                className="link"
                href="https://us.mullenlowe.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                an advertising agency
              </a>
              ,{' '}
              <a
                className="link"
                href="https://starry.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a start-up
              </a>
              ,{' '}
              <a
                className="link"
                href="https://www.apple.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a huge corporation
              </a>
              , and{' '}
              <a
                className="link"
                href="https://scout.camd.northeastern.edu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at{' '}
              <a
                className="link"
                href="https://upstatement.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Upstatement
              </a>{' '}
              for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Vue</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="about-img">
          <img alt="Headshot"></img>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section>
      <h2>Some Things I've Built</h2>
      <ul>
        <li>
          <div className="project-content">
            <p>Featured Project</p>
            <h3>
              <a href="#!">Denton Forums</a>
            </h3>
            <div className="project-description">
              <p>
                A nicer look at your GitHub profile and repository stats with
                data visualizations of your top languages and stars. Sort
                through your top repos by number of stars, forks, and size.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>Next.js</li>
              <li>Chart.js</li>
              <li>GitHub API</li>
            </ul>
            <div className="project-links">
              <a href="#!">
                <Icon icon="github" />
              </a>
              <a href="#!">
                <Icon icon="external" />
              </a>
            </div>
          </div>
          <div className="project-image"></div>
        </li>
      </ul>
    </section>
  );
};

const Content = () => {
  return (
    <main id="content">
      <Intro />
      <About />
      <Projects />
    </main>
  );
};

export default Content;
