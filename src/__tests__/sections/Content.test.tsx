import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Content from '../../sections/Content';

import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Intro from '../../sections/Intro';
import Projects from '../../sections/Projects';

it('renders without crashing', () => {
  shallow(<Content />);
});

it('renders About component', () => {
  const wrapper = shallow(<Content />);

  expect(wrapper.find(About)).toHaveLength(1);
});

it('renders Contact component', () => {
  const wrapper = shallow(<Content />);

  expect(wrapper.find(Contact)).toHaveLength(1);
});

it('renders Intro component', () => {
  const wrapper = shallow(<Content />);

  expect(wrapper.find(Intro)).toHaveLength(1);
});

it('renders Projects component', () => {
  const wrapper = shallow(<Content />);

  expect(wrapper.find(Projects)).toHaveLength(1);
});
