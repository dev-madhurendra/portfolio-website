import React from "react";
import Icon from ".";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { ICON_ALT, ICON_COMPONENT } from "../../../utils/constants";

describe("Icon Tests", () => {
    it("should render icon with src", () => {
        render(<Icon src="../public/assets/png/icon.png" />)
        const iconElement = screen.getByTestId(ICON_COMPONENT)
        expect(iconElement).toBeDefined()
    })
    it("should render with alt text", () => {
        render(<Icon src="../public/assets/png/icon.png" />)
        const iconElement = screen.getByAltText(ICON_ALT)
        expect(iconElement).toBeInTheDocument()
    })
    it("should render with custom style", () => {
        const CustomStyle = {
            color: "red",
            fontSize:"20px"
        }
        render(<Icon src="../public/assets/png/icon.png" sx={CustomStyle} />)
        const iconElement = screen.getByTestId(ICON_COMPONENT)
        expect(iconElement).toHaveStyle(CustomStyle)        
    })
    it("should click on icon", () => {
        const mockClick = jest.fn()
        render(<Icon src="../public/assets/png/icon.png" onClick={mockClick} />)
        const iconElement = screen.getByTestId(ICON_COMPONENT)
        iconElement.click()
        expect(mockClick).toHaveBeenCalledTimes(1)
    })
})
