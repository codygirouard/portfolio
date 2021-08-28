import { useEffect, useRef, useState } from 'react';
import { isScrolledIntoView, getAngle } from '../styleInfo';

import headshot from '../images/headshot.jpg';

const About = () => {
  const [active, setActive] = useState('');
  const aboutRef = useRef<HTMLElement>(null);
  const square1Ref = useRef<HTMLSpanElement>(null);
  const square2Ref = useRef<HTMLSpanElement>(null);

  const rotate = () => {
    setActive('rotate');
  };

  const stopRotate = () => {
    const square1 = square1Ref.current;
    const square2 = square2Ref.current;

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

  const handleScroll = () => {
    const aboutSection = aboutRef.current;

    if (isScrolledIntoView(aboutSection)) {
      window.removeEventListener('scroll', handleScroll);
      aboutSection?.classList.add('fadein-enter');
      setTimeout(() => {
        aboutSection?.classList.add('fadein-active');
      }, 50);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <section className="about fadein" id="about" ref={aboutRef}>
      <h2 className="title">About Me</h2>
      <div>
        <div className="about-content">
          <div>
            <p>
              Hey there! My name is Cody, and I enjoy creating things that live
              on the internet. I'm a recent Computer Science graduate from the
              University of North Texas with lots of hands-on experience
              building full-stack web applications. Some notable projects I have
              worked on so far are{' '}
              <a className="link" href="https://www.dentonforums.com">
                a community-driven social forum
              </a>{' '}
              using the MERN stack and{' '}
              <a className="link" href="https://www.gmgwiki.coudei.me">
                a university-focused wiki
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
        <div className="square-container">
          <div
            className="about-img filter"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            <img alt="Headshot" src={headshot}></img>
            <span
              className={`square ${active}`}
              id="square1"
              ref={square1Ref}
            ></span>
            <span
              className={`square ${active}`}
              id="square2"
              ref={square2Ref}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
