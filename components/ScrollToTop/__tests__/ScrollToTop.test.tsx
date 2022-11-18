import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render, fireEvent } from "@testing-library/react";
import ScrollToTop from '../ScrollToTop'

global.scrollTo = jest.fn();

describe("ScrollToTop", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.clearAllMocks()
    });

    const pageYOffsetMock = 1400;
    
    it("should be called to top: 0 and left: 0", () => {
        global.scrollY = pageYOffsetMock;
        render(<ScrollToTop pageYOffset={pageYOffsetMock} />)
        const scrollBtn = screen.getByTestId('scroll-btn');
        fireEvent.click(scrollBtn);
        expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
        // expect(global.scrollY).toEqual(0);
    });
});