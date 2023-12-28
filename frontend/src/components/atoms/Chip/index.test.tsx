import React from 'react';
import { render, screen } from '@testing-library/react';
import MyChip from '.';
import "@testing-library/jest-dom"
import { IChipProp } from '../../../interfaces/types';

const mockProps: IChipProp = {
  size: 'small',
  label: 'Test Label',
  variant: 'outlined',
  onClick: jest.fn(),
  color: 'primary',
  style: {},
};


describe('MyChip Component', () => {
  it('renders MyChip component with given props', () => {
    render(<MyChip {...mockProps} />);

    const chipElement = screen.getByTestId('mui-chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveTextContent('Test Label');
    expect(chipElement).toHaveClass('MuiChip-outlined');
    expect(chipElement).toHaveClass('MuiChip-sizeSmall');
  });

  it('calls onClick when chip is clicked', () => {
    const mockFunction = jest.fn()    
    render(<MyChip {...mockProps} onClick={mockFunction} />);
    const chipElement = screen.getByTestId('mui-chip');
    chipElement.click()
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
