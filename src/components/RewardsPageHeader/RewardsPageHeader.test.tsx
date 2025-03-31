import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RewardsPageHeader from './RewardsPageHeader';

describe('<RewardsPageHeader />', () => {
  test('it should mount', () => {
    render(<RewardsPageHeader />);

    const rewardsPageHeader = screen.getByTestId('RewardsPageHeader');

    expect(rewardsPageHeader).toBeInTheDocument();
  });
});