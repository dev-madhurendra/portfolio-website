import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import SocialMediaIcons from ".";
import { SOCIAL_MEDIA_COMPONENT } from "../../../utils/constants";

describe('Social Media Icons Test', () => { 
    it("renders with icons", () => {
        render(<SocialMediaIcons />)
        const socialMediaIconElement = screen.getByTestId(SOCIAL_MEDIA_COMPONENT)
        expect(socialMediaIconElement).toBeInTheDocument()
    })
})