import '@testing-library/jest-dom';
import { mount, render, shallow } from 'enzyme';

import { MediaLinks, Icon } from '../../icons/MediaLinks';

describe('medialinks', () => {
  it('renders without crashing', () => {
    shallow(<MediaLinks footer={true} />);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<MediaLinks footer={true} />);

    expect(wrapper.props().footer).toEqual(true);
    wrapper.setProps({ footer: false });
    expect(wrapper.props().footer).toEqual(false);
  });
});

describe('icon', () => {
  it('renders without crashing', () => {
    shallow(<Icon icon="github" />);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Icon icon="github" />);

    expect(wrapper.props().icon).toEqual('github');
    wrapper.setProps({ icon: 'twitter' });
    expect(wrapper.props().icon).toEqual('twitter');
  });

  it('returns correct icon (github)', () => {
    const wrapper = render(<Icon icon="github" />);

    expect(wrapper.html()).toContain('<title>GitHub</title>');
  });
});
