import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Projects from '../../sections/Projects';
import Project from '../../sections/Project';

it('renders without crashing', () => {
  shallow(<Projects />);
});

it('renders Projects title', () => {
  const wrapper = shallow(<Projects />);
  const title = <h2 className="title">Some Things I've Built</h2>;

  expect(wrapper.contains(title)).toEqual(true);
});

it('renders all 3 project components', () => {
  const wrapper = shallow(<Projects />);

  expect(wrapper.find(Project)).toHaveLength(3);
});
