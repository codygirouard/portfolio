import '@testing-library/jest-dom';
import { render, shallow } from 'enzyme';

import HomePage, { Home } from '../Home';
import Header from '../header/Header';
import Content from '../sections/Content';
import { MediaLinks } from '../icons/MediaLinks';
import Footer from '../Footer';

describe('loading screen', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />);
  });

  it('renders logo on loading screen', () => {
    const wrapper = render(<HomePage />);
    const logo =
      '<polygon id="logo-shape" stroke-width="4" stroke-linecap="round" points="42,3 3,25 3,70 42,93 81,71 81,26 "></polygon>';

    expect(wrapper.html()).toContain(logo);
  });
});

describe('home', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });

  it('renders Header component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders Content component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it('renders MediaLinks component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(MediaLinks)).toHaveLength(1);
  });

  it('renders Footer component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
