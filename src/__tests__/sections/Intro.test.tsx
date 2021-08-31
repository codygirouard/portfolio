import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Intro from '../../sections/Intro';
import { TransitionGroup } from 'react-transition-group';

it('renders without crashing', () => {
  shallow(<Intro />);
});

it('renders transition group component', () => {
  const wrapper = shallow(<Intro />);

  expect(wrapper.find(TransitionGroup)).toHaveLength(1);
});
