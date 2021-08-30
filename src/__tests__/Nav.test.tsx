import '@testing-library/jest-dom';
import { render, shallow } from 'enzyme';

import Nav from '../header/Nav';

it('renders without crashing', () => {
  shallow(<Nav />);
});

it('renders links list', () => {
  const wrapper = render(<Nav />);

  expect(wrapper.html()).toContain('<ul>');
});

it('renders all links', () => {
  const wrapper = render(<Nav />);

  expect(wrapper.text()).toContain('About');
  expect(wrapper.text()).toContain('Projects');
  expect(wrapper.text()).toContain('Contact');
  expect(wrapper.text()).toContain('Resume');
});
