import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders intro section', () => {
  render(<App />);
  expect(screen.getByText('Hi, my name is')).toBeInTheDocument();
});

it('renders about section', () => {
  render(<App />);
  expect(screen.getByText('About Me')).toBeInTheDocument();
});

it('renders project section', () => {
  render(<App />);
  expect(screen.getByText("Some Things I've Built")).toBeInTheDocument();
});

it('renders contact section', () => {
  render(<App />);
  expect(screen.getByText("What's Next?")).toBeInTheDocument();
});
