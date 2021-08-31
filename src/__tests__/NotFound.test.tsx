import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import NotFound from '../NotFound';
import { Link } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<NotFound />);
});

it('renders 404 text', () => {
  const wrapper = shallow(<NotFound />);
  const heading = <h1>404</h1>;

  expect(wrapper.contains(heading)).toEqual(true);
});

it('renders Link component', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper.find(Link)).toHaveLength(1);
});
