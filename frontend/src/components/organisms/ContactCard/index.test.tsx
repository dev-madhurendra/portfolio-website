import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactCard from ".";
import { CONTACT_DESC } from "../../../utils/constants";

describe("ContactCard Component", () => {
  it("renders contact details correctly", () => {
    render(<ContactCard />);

    expect(screen.getByText("Madhurendra Nath Tiwari")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText(CONTACT_DESC)).toBeInTheDocument();
  });
});
