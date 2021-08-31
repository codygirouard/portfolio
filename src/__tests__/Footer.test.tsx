import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Footer from '../Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders text', () => {
  const wrapper = shallow(<Footer />);
  const heading = <p>Built by Cody Girouard</p>;

  expect(wrapper.contains(heading)).toEqual(true);
});
