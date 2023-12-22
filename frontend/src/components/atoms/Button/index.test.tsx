import React from "react";
import MuiButton from ".";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MuiButton Tests', () => { 
    it("renders button with text", () => {
        render(<MuiButton children="Resume" />);
        const buttonElement = screen.getByText("Resume");
        expect(buttonElement).toBeInTheDocument();
    });
    
    it("calls onclick function when clicked" , () => {
        const onClickMock = jest.fn();
        render(<MuiButton children="Resume" onClick={onClickMock} />);
        const buttonElement = screen.getByText("Resume");
        buttonElement.click();
        expect(onClickMock).toHaveBeenCalledTimes(1);
    })

    it("disables the button when disabled prop is true", () => {
        render(<MuiButton disabled={true} children="Disabled" />);
        const buttonElement = screen.getByText("Disabled");
        expect(buttonElement).toBeDisabled();
    });
    
    it("applies custom styles to the button", () => {
        const customStyle = {
            color: "green",
            backgroundColor: "black",
        }
        render(<MuiButton children="Custom Styled" style={customStyle} />);
        const buttonElement = screen.getByText("Custom Styled");
        expect(buttonElement).toHaveStyle(customStyle);
    });
})  