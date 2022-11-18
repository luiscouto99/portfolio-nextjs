import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import ContactForm from '../ContactForm'
import user from '@testing-library/user-event';

describe("ContactForm", () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<ContactForm />)
    })

    // it("onSubmit is called when all fields are filled and pass validations", async () => {
    //     const fullName = screen.getByTestId('form-name');
    //     user.type(fullName, 'Full Name')

    //     const email = screen.getByTestId('form-email');
    //     user.type(email, 'example@email.com')

    //     const message = screen.getByTestId('form-message');
    //     user.type(message, 'random message with more than 30 characters due to requirements')

    //     const button = screen.getByTestId('form-button');
    //     user.click(button);
        
    //     await waitFor(() => {
    //         expect(onSubmit).toHaveBeenCalledWith({
    //             "email": "example@email.com",
    //             "message": "random message with more than 30 characters due to requirements",
    //             "name": "Full Name"
    //         });
    //     });
    //     expect(onSubmit).toHaveBeenCalledTimes(1);
    // });

    it("should render <ThanksContainer /> when form is submitted", () => {
        const button = screen.getByTestId('form-button');
        user.click(button);
        
        setTimeout(() => {
            const thanks = screen.getByTestId('form-thanks');
            expect(thanks).toBeInTheDocument()
        }, 100);
    });
});
