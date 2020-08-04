import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders CRUD Thy Users title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CRUD Thy Users/i);
  expect(linkElement).toBeInTheDocument();
});
