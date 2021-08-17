const Intro = () => {
  return (
    <section>
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2>Brittany Chiang.</h2>
      </div>
      <div>
        <h3>I build things for the web.</h3>
      </div>
      <div>
        <p>
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at{' '}
          <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
            Upstatement
          </a>
          .
        </p>
      </div>
      <div>
        <a href="mailto:brittany.chiang@gmail.com">Get In Touch</a>
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
                href="https://us.mullenlowe.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                an advertising agency
              </a>
              ,{' '}
              <a
                href="https://starry.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a start-up
              </a>
              ,{' '}
              <a
                href="https://www.apple.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a huge corporation
              </a>
              , and{' '}
              <a
                href="https://scout.camd.northeastern.edu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at{' '}
              <a
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

const Content = () => {
  return (
    <main id="content">
      <Intro />
      <About />
    </main>
  );
};

export default Content;
