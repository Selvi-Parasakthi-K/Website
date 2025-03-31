import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EarningSteps from './EarningSteps';

describe('<EarningSteps />', () => {
  test('it should mount', () => {
    render(<EarningSteps />);

    const earningSteps = screen.getByTestId('EarningSteps');

    expect(earningSteps).toBeInTheDocument();
  });
});