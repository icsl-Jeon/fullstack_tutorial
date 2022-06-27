import { render, screen } from '@testing-library/react';
import AppFunction from './AppFunction';

test('renders learn react link', () => {
  render(<AppFunction />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
