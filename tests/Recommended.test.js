import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import Recommended from '../components/Recommended';
import { RECOMMENDED } from '../utils/constants';

describe('learning how tests work', () => {
  it('renders correct heading', () => {
    const { getByRole } = render(<Recommended products={RECOMMENDED} />, {});
    expect(getByRole('heading').textContent).toMatch(/^recommended for you$/i);
  });
});
