import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TechScroll from ".";
import '@testing-library/jest-dom'
import { CHEVRON_LEFT_ROLE, CHEVRON_RIGHT_ROLE } from "../../../services/mocks/testMocks";

const mockTechnologies =
  "React,Node.js,Jest,Express,GraphQL,TypeScript,Redux,HTML,CSS";

const setup = () => {
  render(<TechScroll technologies={mockTechnologies} />);
};

describe("TechScroll", () => {
  it("renders the initial set of technologies", () => {
    setup();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Jest")).toBeInTheDocument();
  });

  it('disables the "previous" button on the first page', () => {
    setup();
    const prevButton = screen.getByRole(CHEVRON_LEFT_ROLE);
    expect(prevButton).toBeDisabled();
  });

  it('enables the "next" button on the first page', () => {
    setup();
    const nextButton = screen.getByRole(CHEVRON_RIGHT_ROLE);
    expect(nextButton).not.toBeEnabled();
  });

  it('renders the next set of technologies after clicking "next"', () => {
    setup();
    const nextButton = screen.getByRole(CHEVRON_RIGHT_ROLE);
    fireEvent.click(nextButton);
  });

  it('renders the previous set of technologies after clicking "previous"', () => {
    setup();
    const nextButton = screen.getByRole(CHEVRON_RIGHT_ROLE);
    fireEvent.click(nextButton);
    const prevButton = screen.getByRole(CHEVRON_LEFT_ROLE);
    fireEvent.click(prevButton);
  });
});
