import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PointsTable from './PointsTable';

describe('<PointsTable />', () => {
  test('it should mount', () => {
    render(<PointsTable />);

    const pointsTable = screen.getByTestId('PointsTable');

    expect(pointsTable).toBeInTheDocument();
  });
});