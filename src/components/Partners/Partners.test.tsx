import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Partners from './Partners';

describe('<Partners />', () => {
  test('it should mount', () => {
    render(<Partners />);

    const partners = screen.getByTestId('Partners');

    expect(partners).toBeInTheDocument();
  });
});