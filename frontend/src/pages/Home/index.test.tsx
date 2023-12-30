import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import HomeSection from '.';
import { DarkModeProvider } from '../../services/context/DarkMode';
import { NAME_ANIMATION } from '../../utils/constants';

describe('HomeSection', () => {
  it('renders without crashing', () => {
    render(<DarkModeProvider><HomeSection /></DarkModeProvider>)
  });

  it('renders greeting text', () => {
    render(<DarkModeProvider><HomeSection /></DarkModeProvider>)
    const greetingText = screen.getByText('Hello');
    expect(greetingText).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<DarkModeProvider><HomeSection /></DarkModeProvider>)
    const nameElement = screen.getAllByTestId(NAME_ANIMATION);
    expect(nameElement.length).toBeGreaterThan(0);
  });

  it('renders the "Resume" button', () => {
    render(<DarkModeProvider><HomeSection /></DarkModeProvider>)
    const resumeButton = screen.getByText('Resume');
    expect(resumeButton).toBeInTheDocument();
  });
});
