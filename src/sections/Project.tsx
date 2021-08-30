import { useEffect, useRef, useState } from 'react';
import { Icon } from '../icons/MediaLinks';
import elementAppear from '../EnterStyles';

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
  const projectRef = useRef<HTMLLIElement>(null);

  const handleEnter = () => {
    setPlayGif(true);
  };

  const handleLeave = () => {
    setPlayGif(false);
  };

  const handleScroll = () => {
    elementAppear(projectRef, 'slidein', handleScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <li className="project slidein" ref={projectRef}>
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
      <div
        className={`project-image ${
          title === 'Portfolio' ? 'white-border' : ''
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <a href={link}>
          <img alt={title} src={playGif ? gif : jpg}></img>
        </a>
      </div>
    </li>
  );
};

export default Project;
