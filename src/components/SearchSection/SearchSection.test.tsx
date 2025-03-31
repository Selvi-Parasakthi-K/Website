import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchSection from './SearchSection';

describe('<SearchSection />', () => {
  test('it should mount', () => {
    render(<SearchSection />);

    const searchSection = screen.getByTestId('SearchSection');

    expect(searchSection).toBeInTheDocument();
  });
});