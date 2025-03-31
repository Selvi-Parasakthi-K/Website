import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FAQ from './FAQ';

describe('<FAQ />', () => {
  test('it should mount', () => {
    render(<FAQ />);

    const faq = screen.getByTestId('FAQ');

    expect(faq).toBeInTheDocument();
  });
});