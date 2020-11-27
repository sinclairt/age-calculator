import {render, unmountComponentAtNode} from "react-dom";
import AgeResult from "./AgeResult";
import {act} from "@testing-library/react";
import React from "react";
import moment from "moment";
import {getAgeDiff} from "./age.service";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders the age', () => {
    act(() => {
        render(<AgeResult age={moment('1988-04-30')}/>, container);
    });
    let diff = getAgeDiff(moment('1988-04-30'));
    expect(container.textContent).toBe("You are " + diff + " old!");
})
