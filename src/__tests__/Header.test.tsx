import '@testing-library/jest-dom';
import { render, shallow } from 'enzyme';

import Header from '../header/Header';
import MobileNav from '../header/MobileNav';
import Nav from '../header/Nav';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders logo', () => {
  const wrapper = render(<Header />);

  expect(wrapper.html()).toContain('svg');
});

it('renders logo text', () => {
  const wrapper = render(<Header />);

  expect(wrapper.html()).toContain('C</text>');
});

it('renders mobile nav component', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find(MobileNav)).toHaveLength(1);
});

it('renders main nav component', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find(Nav)).toHaveLength(1);
});
