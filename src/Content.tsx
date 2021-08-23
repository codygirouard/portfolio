import { Icon } from './MediaLinks';
import { useState } from 'react';

import headshot from './images/headshot.jpg';
import dentonforumsJpg from './images/dentonforums.jpg';
import dentonforumsGif from './images/dentonforums.gif';
import gmgwikiJpg from './images/gmgwiki.jpg';
import gmgwikiGif from './images/gmgwiki.gif';
import portfolioJpg from './images/portfolio.jpg';
import portfolioGif from './images/portfolio.gif';

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
  const [active, setActive] = useState('');

  const getAngle = (element: HTMLSpanElement) => {
    const matrix = window
      .getComputedStyle(element)
      .getPropertyValue('transform');

    let matrixValues = matrix.split('(')[1];
    matrixValues = matrixValues.split(')')[0];
    const a = parseFloat(matrixValues.split(',')[0]);
    const b = parseFloat(matrixValues.split(',')[1]);

    return Math.round(Math.atan2(b, a) * (180 / Math.PI));
  };

  const rotate = () => {
    setActive('rotate');
  };

  const stopRotate = () => {
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');

    if (!square1 || !square2) {
      return;
    }

    const square1Angle = getAngle(square1);
    const square2Angle = getAngle(square2);

    square1.style.transform = `rotate(${square1Angle}deg)`;
    square2.style.transform = `rotate(${square2Angle}deg)`;

    requestAnimationFrame(() => {
      square1.style.transform = 'rotate(22deg)';
      square2.style.transform = 'rotate(67deg)';
    });
    setActive('');
  };

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
              worked on as of today are{' '}
              <a className="link" href="https://www.dentonforums.com">
                a community-driven social forum
              </a>{' '}
              using the MERN stack and{' '}
              <a className="link" href="https://www.gmgwiki.coudei.me">
                a university focused wiki
              </a>{' '}
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
        <div
          className="about-img filter"
          onMouseEnter={rotate}
          onMouseLeave={stopRotate}
        >
          <img alt="Headshot" src={headshot}></img>
          <span className={`square ${active}`} id="square1"></span>
          <span className={`square ${active}`} id="square2"></span>
        </div>
      </div>
    </section>
  );
};

type ProjectProps = {
  title: string;
  link: string;
  description: string;
  techList: string[];
  github: string;
  jpg: string;
  gif: string;
};

const Project = ({
  title,
  link,
  description,
  techList,
  github,
  jpg,
  gif,
}: ProjectProps) => {
  const [playGif, setPlayGif] = useState(false);

  const handleEnter = () => {
    setPlayGif(true);
  };

  const handleLeave = () => {
    setPlayGif(false);
  };

  return (
    <li className="project">
      <div className="project-content">
        <h3 className="project-title">
          <a href={link}>{title}</a>
        </h3>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <ul className="project-tech-list">
          {techList.map((tech, i) => {
            return <li key={`${tech}-${i}`}>{tech}</li>;
          })}
        </ul>
        <div className="project-links">
          <a href={github}>
            <Icon icon="github" />
          </a>
          <a href={link}>
            <Icon icon="external" />
          </a>
        </div>
      </div>
      <div className="project-image">
        <img
          alt={title}
          src={playGif ? gif : jpg}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        ></img>
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Some Things I've Built</h2>
      <ul>
        <Project
          title="Denton Forums"
          link="https://www.dentonforums.com"
          description="A forum web application for connecting with local Denton residents. Create 
          an account, start and contribute to discussions, and upvote posts that you enjoy."
          techList={['MongoDB', 'Express', 'React', 'Node.js']}
          github="https://github.com/codygirouard/Forums"
          jpg={dentonforumsJpg}
          gif={dentonforumsGif}
        />
        <Project
          title="Go Mean Green Wiki"
          link="https://www.gmgwiki.coudei.me"
          description="A wiki that informs University of North Texas students what is offered to them. 
          Users can create accounts, 'heart' and comment on their favorite buildings, view the most 
          popular buildings, and look for buildings by alphabetical sort or search bar."
          techList={[
            'jQuery',
            'AJAX',
            'Linux',
            'Apache',
            'MySQL',
            'PHP',
            'SASS',
          ]}
          github="https://github.com/codygirouard/gmgwiki"
          jpg={gmgwikiJpg}
          gif={gmgwikiGif}
        />
        <Project
          title="Portfolio"
          link="https://www.codygirouard.codes"
          description="A website portfolio that displays everything me! View my accomplishments, resume, and get in contact with me here."
          techList={['React', 'TypeScript', 'SASS', 'Node']}
          github="https://github.com/codygirouard/portfolio"
          jpg={portfolioJpg}
          gif={portfolioGif}
        />
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1>What's Next?</h1>
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for new opportunities to be a Software Engineer
        working on the web. I love working on the front-end, but have plenty of
        expereince working on the front-end and back-end aspects of web
        applications.
      </p>
      <a href="mailto:girouardcodya@gmail.com" className="button">
        Say Hello
      </a>
    </section>
  );
};

const Content = () => {
  return (
    <main id="content">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Content;
