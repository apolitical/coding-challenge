import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders links in header', () => {
  render(<Header />);
  const viewAllLink = screen.getByText(/View all/i);
  expect(viewAllLink).toBeInTheDocument();
  const favouritesLink = screen.getByText(/My favourites/i);
  expect(favouritesLink).toBeInTheDocument();
});
