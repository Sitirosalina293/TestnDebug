import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home'

test('renders learn react link', () => {
  render(<Home />);

  const linkElement = screen.getByText(/Siti Rosalina/i);
  expect(linkElement).toBeInTheDocument();

  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent('Get Post');

  fireEvent.click(btn)

  const btn2 = screen.getByRole('button');
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent('Back to Home');

});
