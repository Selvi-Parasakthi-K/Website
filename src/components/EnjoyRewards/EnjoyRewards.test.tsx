import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnjoyRewards from './EnjoyRewards';

describe('<EnjoyRewards />', () => {
  test('it should mount', () => {
    render(<EnjoyRewards />);

    const enjoyRewards = screen.getByTestId('EnjoyRewards');

    expect(enjoyRewards).toBeInTheDocument();
  });
});