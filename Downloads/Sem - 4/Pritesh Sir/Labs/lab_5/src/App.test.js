import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hero section correctly', () => {
  render(<App />);
  const heroElement = screen.getByText(/Revolutionizing Your Digital Presence/i);
  expect(heroElement).toBeInTheDocument();
});
