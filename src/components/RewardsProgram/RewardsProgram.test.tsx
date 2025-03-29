import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RewardsProgram from './RewardsProgram';

describe('<RewardsProgram />', () => {
  test('it should mount', () => {
    render(<RewardsProgram />);

    const rewardsProgram = screen.getByTestId('RewardsProgram');

    expect(rewardsProgram).toBeInTheDocument();
  });
});