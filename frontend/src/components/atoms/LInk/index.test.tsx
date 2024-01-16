import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Link from '.';

describe('Link Component', () => {
  const testUrl = 'https://example.com';
  const testChildren = 'Click me';

  it('renders link with correct props', () => {
    render(<Link url={testUrl}>{testChildren}</Link>);

    const link = screen.getByRole('link', { name: testChildren });
    expect(link).toHaveAttribute('href', testUrl);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

});
