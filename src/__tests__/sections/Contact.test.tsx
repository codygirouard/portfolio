import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Contact from '../../sections/Contact';

it('renders without crashing', () => {
  shallow(<Contact />);
});

it('renders contact heading', () => {
  const wrapper = shallow(<Contact />);
  const heading = <h1>What's Next?</h1>;

  expect(wrapper.contains(heading)).toEqual(true);
});
