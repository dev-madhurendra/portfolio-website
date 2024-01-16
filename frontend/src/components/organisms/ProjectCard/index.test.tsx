import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from ".";
import '@testing-library/jest-dom'

const mockProjects = {
  id:1,  
  title: "Sample Project",
  description: "This is a sample project description.",
  technologies: "React, Node.js, Jest",
  githubUrl: "https://github.com/example/sample-project",
  deployedUrl: "https://example.com/sample-project",
  link: "https://example.com/sample-project",
  projectImage: "https://example.com/sample-project",
};

const setup = () => {
  render(<ProjectCard projects={mockProjects} />);
};

describe("ProjectCard", () => {
  it("renders project title and description", () => {
    setup();
    expect(screen.getByText("Sample Project")).toBeInTheDocument();
    expect(
      screen.getByText("This is a sample project description.")
    ).toBeInTheDocument();
  });

  it("renders project technologies as chips", () => {
    setup();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Jest")).toBeInTheDocument();
  });
});
