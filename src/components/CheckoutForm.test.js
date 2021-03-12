import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
test('renders without errors', ()=>{
    render(<CheckoutForm/>);
});


test("form header renders", () => {
    //arrange
    render(<CheckoutForm/>);
    //act
    const header = screen.queryByText(/Checkout Form/i)
    //assert
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //arrange
    render(<CheckoutForm/>);
    //act
    const firstInput = screen.getByLabelText("First Name:")
    userEvent.type(firstInput, "Jeff");
    const lastInput = screen.getByLabelText("Last Name:")
    userEvent.type(lastInput, "Jefferson");
    const addressInput = screen.getByLabelText("Address:")
    userEvent.type(addressInput, "123 Alphabet Rd");
    const cityInput = screen.getByLabelText("City:")
    userEvent.type(cityInput, "New York");
    const stateInput = screen.getByLabelText("State:")
    userEvent.type(stateInput, "NY");
    const zipInput = screen.getByLabelText("Zip:")
    userEvent.type(zipInput, "12345");
    const button = screen.getByRole("button");
    userEvent.click(button)
    //assert
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});
