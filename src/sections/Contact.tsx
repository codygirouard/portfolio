import { useEffect, useRef } from 'react';
import { isScrolledIntoView } from '../styleInfo';

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const contactSection = contactRef.current;

    if (isScrolledIntoView(contactSection)) {
      contactSection?.classList.add('fadezoom-active');
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <section className="contact fadezoom" id="contact" ref={contactRef}>
      <h1>What's Next?</h1>
      <h2>Get In Touch</h2>
      <p>
        I'm a recent Graduate Software Engineer seeking Front-End or Full-Stack
        roles, proficient with React, TypeScript, Node.js, Python, MongoDB
        (NoSQL), and other technologies. I love working on the front end and
        have two year's worth of experience working on full-stack web
        applications.
      </p>
      <a href="mailto:girouardcodya@gmail.com" className="button">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
