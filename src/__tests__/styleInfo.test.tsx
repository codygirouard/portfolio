import '@testing-library/jest-dom';
import { isScrolledIntoView } from '../styleInfo';

it('returns false on null object', () => {
  expect(isScrolledIntoView(null)).toBe(false);
});
