import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';

import App from './App';
import { Home } from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders intro section', () => {
  render(<Home />);
  expect(screen.getByText('Hi, my name is')).toBeInTheDocument();
});

it('renders about section', () => {
  render(<Home />);
  expect(screen.getByText('About Me')).toBeInTheDocument();
});

it('renders project section', () => {
  render(<Home />);
  expect(screen.getByText("Some Things I've Built")).toBeInTheDocument();
});

it('renders contact section', () => {
  render(<Home />);
  expect(screen.getByText("What's Next?")).toBeInTheDocument();
});
