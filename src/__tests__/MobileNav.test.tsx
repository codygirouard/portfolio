import '@testing-library/jest-dom';
import { render, shallow } from 'enzyme';

import MobileNav from '../header/MobileNav';

it('renders without crashing', () => {
  shallow(<MobileNav />);
});

it('renders hamburger button', () => {
  const wrapper = render(<MobileNav />);

  expect(wrapper.find('.hamburger')).toHaveLength(1);
  expect(wrapper.html()).toContain('input');
});

it('renders links', () => {
  const wrapper = render(<MobileNav />);

  expect(wrapper.text()).toContain('About');
  expect(wrapper.text()).toContain('Projects');
  expect(wrapper.text()).toContain('Contact');
  expect(wrapper.text()).toContain('Resume');
});
