import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RewardsPointsTable from './RewardsPointsTable';

describe('<RewardsPointsTable />', () => {
  test('it should mount', () => {
    render(<RewardsPointsTable />);

    const rewardsPointsTable = screen.getByTestId('RewardsPointsTable');

    expect(rewardsPointsTable).toBeInTheDocument();
  });
});