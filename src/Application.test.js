import React from 'react';
import { render } from '@testing-library/react';
import Application from './Application';

test('renders learn react link', () => {
  const { getByText } = render(<Application />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});