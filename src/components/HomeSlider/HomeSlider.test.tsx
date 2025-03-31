import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeSlider from './HomeSlider';

describe('<HomeSlider />', () => {
  test('it should mount', () => {
    render(<HomeSlider />);

    const homeSlider = screen.getByTestId('HomeSlider');

    expect(homeSlider).toBeInTheDocument();
  });
});