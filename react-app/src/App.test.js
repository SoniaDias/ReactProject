import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  const {getByText} = render(<App />);
  const h1 = screen.getByText(/Test/);
  expect(h1).toHaveTextContent("Test");
});
