import {render, unmountComponentAtNode} from "react-dom";
import React from "react";
import {act} from "@testing-library/react";
import App from "./App";

jest.mock("./DataForm", () => {
    return function DummyDataForm(props) {
        const formProps = {name: 'Foo', dob: new Date('1988-04-30')};
        return (
            <form data-testid="dataForm" onSubmit={e => props.onSubmit({...formProps})}>
                <input value={formProps.name} onChange={e => null}/>
                <input value={formProps.dob} type={'date'} onChange={e => null}/>
                <button type={'submit'}>submit</button>
            </form>
        );
    };
});

jest.mock("./Records", () => {
    return function DummyRecords(props) {
        return (
            <>
                {props.records.map((record, i) => <p key={i}>{record.name + '|' + record.dob}</p>)}
            </>
        )
    }
});

jest.mock("./AgeResult", () => {
    return function DummyAgeResult(props) {
        return (<h1 data-testid={'ageResult'}>Result</h1>)
    }
});

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

it('manages records', () => {
    act(() => {
        render(<App/>, container);
    })

    expect(container.querySelector("[data-testid=ageResult]")).toBeNull();
    const form = container.querySelector("[data-testid=dataForm]");

    const beforeCount = container.getElementsByTagName('p').length;

    act(() => {
        form.dispatchEvent(new Event("submit", {bubbles: true, cancelable: true}));
    });

    expect(container.getElementsByTagName('p').length).toEqual(beforeCount + 1);
    expect(container.querySelector("[data-testid=ageResult]")).not.toBeNull();
});

