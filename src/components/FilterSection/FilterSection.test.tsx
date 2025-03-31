import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterSection from './FilterSection';

describe('<FilterSection />', () => {
  test('it should mount', () => {
    render(<FilterSection />);

    const filterSection = screen.getByTestId('FilterSection');

    expect(filterSection).toBeInTheDocument();
  });
});