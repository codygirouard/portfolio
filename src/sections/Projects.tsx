import { useEffect, useRef } from 'react';
import elementAppear from '../EnterStyles';
import Project from './Project';

import dentonforumsJpg from '../images/dentonforums.jpg';
import dentonforumsGif from '../images/dentonforums.gif';
import gmgwikiJpg from '../images/gmgwiki.jpg';
import gmgwikiGif from '../images/gmgwiki.gif';
import portfolioJpg from '../images/portfolio.jpg';
import portfolioGif from '../images/portfolio.gif';

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    elementAppear(projectsRef, 'fadein', handleScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <section className="projects fadein" id="projects" ref={projectsRef}>
      <h2 className="title">Some Things I've Built</h2>
      <ul>
        <Project
          title="Denton Forums"
          link="https://www.dentonforums.com"
          description="A forum web application that connects local Denton residents. Create an
            account, upvote posts that you enjoy, and contribute to discussions!"
          techList={['MongoDB', 'Express', 'React', 'Node.js', 'Heroku']}
          github="https://github.com/codygirouard/Forums"
          jpg={dentonforumsJpg}
          gif={dentonforumsGif}
        />
        <Project
          title="Go Mean Green Wiki"
          link="https://www.gmgwiki.coudei.me"
          description="A wiki that informs students what the University of North
            Texas offers to them. Users can create accounts and 'heart' and
            comment on their favorite buildings. To promote exploration, students
            can sort pages by popularity and search alphabetically or by keywords."
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
          techList={['React', 'TypeScript', 'SASS', 'Node', 'Netlify']}
          github="https://github.com/codygirouard/portfolio"
          jpg={portfolioJpg}
          gif={portfolioGif}
        />
      </ul>
    </section>
  );
};

export default Projects;
