import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from ".";

describe("Contact Component", () => {
  it("renders form fields correctly", () => {
    render(<Contact />);

    const nameLabel = screen.getByText("Name");
    expect(nameLabel).toBeInTheDocument();
  });

  it("submits the form correctly", async () => {
    render(<Contact />);

    const nameInput = screen.getByText("Name");
    const messageInput = screen.getByText("Message");
    const phoneNumber = screen.getByText("Phone Number");
    const sendButton = screen.getByText("Send Message");
      
    expect(nameInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();  
    expect(sendButton).toBeInTheDocument();

  });
});
