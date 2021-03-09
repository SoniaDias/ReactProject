import { fireEvent } from "@testing-library/dom";
import { render, screen } from '@testing-library/react';
import {Checkbox} from './checkbox';
import React from "react";

test("selecting checkbox", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});


  