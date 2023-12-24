import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Typography from "."


describe("Typography Tests", () => {
    it("should render typography with text", () => {
        render(<Typography text="Hello" />)
        const typographyElement = screen.getByText("Hello")
        expect(typographyElement).toBeInTheDocument()
    })

    it("should render typography with text", () => {
        const CustomStyle = {
            color: "red",
            fontSize:"20px"
        }
        render(<Typography text="Styled Text" sx={CustomStyle} />)
        const typographyElement = screen.getByText("Styled Text")
        expect(typographyElement).toHaveStyle(CustomStyle)
    })
    
})