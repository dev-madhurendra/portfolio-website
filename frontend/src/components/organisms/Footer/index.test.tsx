import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from ".";

jest.mock("../../../services/apicalls/getcall", () => ({
  getQuotes: jest.fn(() =>
    Promise.resolve({ data: [{ content: "Mocked quote" }] })
  ),
}));

describe("Footer it", () => {
  it("Developer name and role are rendered", () => {
    render(<Footer />);
    expect(screen.getByText("Madhurendra Nath Tiwari")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("Social links are rendered", () => {
    render(<Footer />);
    expect(screen.getAllByRole("link")).toHaveLength(4);
  });

  it("Quotes are fetched and displayed", async () => {
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText("Mocked quote")).toBeInTheDocument();
    });
  });
});
