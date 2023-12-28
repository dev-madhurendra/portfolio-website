import React from 'react';
import About from '.';
import { render, screen, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom"
import { ABOUT_COMPONENT, ABOUT_DESC, ABOUT_SUB_DESC, ABOUT_SUB_FOOTER_DESC, ICON_ABOUT_ALT } from '../../utils/constants';

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  afterEach(cleanup);

  it('renders the About component', () => {
    const aboutElement = screen.getByTestId(ABOUT_COMPONENT);
    expect(aboutElement).toBeInTheDocument();
  });

  it('renders the image', () => {
    const imageElement = screen.getByAltText(ICON_ABOUT_ALT);
    expect(imageElement).toBeInTheDocument();
  });

  it('renders the chip with label Software Engineer', () => {
    const chipElement = screen.getByText('<Software Engineer />');
    expect(chipElement).toBeInTheDocument();
  });

  it('renders the description', () => {
    const descriptionElement = screen.getByText(ABOUT_DESC);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the sub-description', () => {
    const subDescriptionElement = screen.getByText(ABOUT_SUB_DESC);
    expect(subDescriptionElement).toBeInTheDocument();
  });

  it('renders the skills', () => {
    const skillElement = screen.getByText('🌐 Frontend Development');
    expect(skillElement).toBeInTheDocument();
  });
});
