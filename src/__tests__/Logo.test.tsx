import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';

import Logo from '../icons/Logo';

it('renders without crashing', () => {
  shallow(<Logo letter="C" />);
});

it('allows us to set props', () => {
  const wrapper = mount(<Logo letter="A" />);

  expect(wrapper.props().letter).toEqual('A');
  wrapper.setProps({ letter: 'B' });
  expect(wrapper.props().letter).toEqual('B');
});
