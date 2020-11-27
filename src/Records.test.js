import {render, unmountComponentAtNode} from "react-dom";
import {act} from "@testing-library/react";
import React from "react";
import Records from "./Records";
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

it('renders the records', () => {
    let records = [];
    act(() => {
        render(<Records records={records}/>, container);
    });
    expect(container.textContent).toContain('No history yet.');

    let item = {name: 'Foo', dob: moment('1988-04-30')};
    records.unshift(item);
    act(() => {
        render(<Records records={records}/>, container);
    });
    expect(container.textContent).not.toContain('No history yet.');
    expect(container.textContent).toContain(getAgeDiff(item.dob));
    expect(container.textContent).toContain(item.name);
    expect(container.textContent).toContain(item.dob.format('DD/MM/yyyy'));
})
