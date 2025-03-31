import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LevelsSection from './LevelsSection';

describe('<LevelsSection />', () => {
  test('it should mount', () => {
    render(<LevelsSection />);

    const levelsSection = screen.getByTestId('LevelsSection');

    expect(levelsSection).toBeInTheDocument();
  });
});