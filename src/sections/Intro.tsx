import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2>Cody Girouard.</h2>;
  const three = <h3>I create things for the web.</h3>;
  const four = (
    <p>
      I'm a software engineer focused on creating and building exceptional
      digital experiences.
    </p>
  );
  const five = (
    <a className="button" href="mailto:girouardcodya@gmail.com">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="intro">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={5000}>
              <div style={{ transitionDelay: `${i + 6}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
};

export default Intro;
