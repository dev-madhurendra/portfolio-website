import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DarkModeToggle from '.';            
import { IDarkModeToggle } from '../../../interfaces/types';
import { DARK_MODE_TOGGLE_COMPONENT } from '../../../utils/constants';

describe('DarkModeToggle Component Tests', () => {
  const defaultProps: IDarkModeToggle = {
    checked: false,
    onChange: jest.fn(),
  };

  it('renders the DarkModeToggle component with default props', () => {
    const { getByTestId } = render(<DarkModeToggle {...defaultProps} />);
    const darkModeToggle = getByTestId(DARK_MODE_TOGGLE_COMPONENT);

    expect(darkModeToggle).toBeInTheDocument();
    expect(darkModeToggle).not.toBeChecked()
  });

  it('renders the DarkModeToggle component with custom props', () => {
    const customProps: IDarkModeToggle = {
      ...defaultProps,
      checked: true,
      size: 150,
      styles: { backgroundColor: 'red' },
    };

    const { getByTestId } = render(<DarkModeToggle {...customProps} />);
    const darkModeToggle = getByTestId(DARK_MODE_TOGGLE_COMPONENT);

    expect(darkModeToggle).toBeInTheDocument();
    expect(darkModeToggle).toHaveStyle({ backgroundColor: 'red' });
  });

  it('invokes the onChange callback when toggled', () => {
    const { getByTestId } = render(<DarkModeToggle {...defaultProps} />);
    const darkModeToggle = getByTestId(DARK_MODE_TOGGLE_COMPONENT);

    fireEvent.click(darkModeToggle);

    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
