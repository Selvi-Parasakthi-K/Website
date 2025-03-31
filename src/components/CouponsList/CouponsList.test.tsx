import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CouponsList from './CouponsList';

describe('<CouponsList />', () => {
  test('it should mount', () => {
    render(<CouponsList />);

    const couponsList = screen.getByTestId('CouponsList');

    expect(couponsList).toBeInTheDocument();
  });
});