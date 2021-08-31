import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Project from '../../sections/Project';

import dentonforumsJpg from '../../images/dentonforums.jpg';
import dentonforumsGif from '../../images/dentonforums.gif';

it('renders example project without crashing', () => {
  shallow(
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
  );
});
