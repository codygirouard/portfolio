import '@testing-library/jest-dom';
import { render, shallow } from 'enzyme';

import About from '../sections/About';

it('renders without crashing', () => {
  shallow(<About />);
});

it('renders about title', () => {
  const wrapper = shallow(<About />);
  const title = <h2 className="title">About Me</h2>;

  expect(wrapper.contains(title)).toEqual(true);
});

it('renders technology list heading', () => {
  const wrapper = shallow(<About />);
  const heading = (
    <p>Here are a few technologies I've been working with recently:</p>
  );

  expect(wrapper.contains(heading)).toEqual(true);
});

it('renders React and TypeScript', () => {
  const wrapper = render(<About />);

  expect(wrapper.text()).toContain('React');
  expect(wrapper.text()).toContain('TypeScript');
});

it('renders headshot image', () => {
  const wrapper = render(<About />);

  expect(wrapper.html()).toContain('<img alt="Headshot" src="headshot.jpg">');
});
