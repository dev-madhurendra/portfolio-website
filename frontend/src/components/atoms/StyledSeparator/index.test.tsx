import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledSeparator from ".";
import { StyledHorizontalSmallLine, StyledHorizontalLargeLine } from "../../../utils/styled";

describe("StyledSeparator Component", () => {
  it("renders StyledSeparator with correct styles", () => {
    const { container } = render(<StyledSeparator />);

    const smallLine = container.querySelectorAll(".css-1j2jhaj")[0];
    const largeLine = container.querySelectorAll(".css-1ak5guh")[0];

    expect(smallLine).toHaveStyle(
      "border: 1px solid orange; width: 40%; margin-bottom: 10px;"
    );
    expect(largeLine).toHaveStyle("border: 1px solid orange; width: 50%;");
  });

  it("renders StyledHorizontalSmallLine with correct styles", () => {
    const { container } = render(<StyledHorizontalSmallLine />);

    const smallLine = container.querySelectorAll(".css-1j2jhaj")[0];

    expect(smallLine).toHaveStyle(
      "border: 1px solid orange; width: 40%; margin-bottom: 10px;"
    );
  });

  it("renders StyledHorizontalLargeLine with correct styles", () => {
    const { container } = render(<StyledHorizontalLargeLine />);

    const largeLine = container.querySelectorAll(".css-1ak5guh")[0];

    expect(largeLine).toHaveStyle("border: 1px solid orange; width: 50%;");
  });
});
