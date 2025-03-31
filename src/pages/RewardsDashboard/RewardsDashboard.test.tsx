import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RewardsDashboard from './RewardsDashboard';

describe('<RewardsDashboard />', () => {
  test('it should mount', () => {
    render(<RewardsDashboard />);

    const rewardsDashboard = screen.getByTestId('RewardsDashboard');

    expect(rewardsDashboard).toBeInTheDocument();
  });
});