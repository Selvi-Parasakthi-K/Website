import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Benefits from './Benefits';

describe('<Benefits />', () => {
  test('it should mount', () => {
    render(<Benefits />);

    const benefits = screen.getByTestId('Benefits');

    expect(benefits).toBeInTheDocument();
  });
});