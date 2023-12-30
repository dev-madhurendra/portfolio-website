import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { EDUCATION_SECTION_TEST_ID } from "../../services/mocks/testMocks";
import { DarkModeProvider } from "../../services/context/DarkMode";
import Education from ".";

describe('Education Section Tests', () => {
    it('should education renders correctly', () => {
        render(<DarkModeProvider children={<Education />} />)
        const educationElement = screen.getByTestId(EDUCATION_SECTION_TEST_ID)
        expect(educationElement).toBeInTheDocument()
    })        
})