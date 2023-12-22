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
})