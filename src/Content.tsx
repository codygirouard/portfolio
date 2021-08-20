import { Icon } from "./MediaLinks";
import headshot from "./images/headshot.jpg";

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
    <section className="about" id="about">
      <h2 className="title">About Me</h2>
      <div>
        <div>
          <div>
            <p>
              Hey there! My name is Cody and I enjoy creating things that live
              on the internet. I'm a recent Computer Science graduate from the
              University of North Texas with lots of hands-on experience
              building full-stack web applications. Some notable projects I have
              worked on as of today are{" "}
              <a className="link" href="https://www.dentonforums.com">
                a community-driven social forum
              </a>{" "}
              using the MERN stack and{" "}
              <a className="link" href="https://www.gmgwiki.coudei.me">
                a university focused wiki
              </a>{" "}
              using the LAMP stack.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="skills-list">
            <li>React</li>
            <li>SASS</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="about-img filter">
          <img alt="Headshot" src={headshot}></img>
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
