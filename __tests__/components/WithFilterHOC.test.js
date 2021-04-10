import React from "react";
import { render, fireEvent, waitFor, screen, prettyDOM, logRoles, act } from '@testing-library/react'
import selectEvent from 'react-select-event'

import {WithFilterHOC} from "../../src/components/ReactSelect/WithFilterHOC";

describe("Component WithFilterHOC", () => {

    const options = [
        { value: "1", label: "one" },
        { value: "2", label: "two" },
        { value: "3", label: "three" },
    ];
    const onChange = jest.fn();
    const defaultValue = options[0];

    it('should be rendered', function () {
        const { baseElement, getByText , getByRole, getAllByText } = render(
            <WithFilterHOC options={options} onChange={onChange} value={defaultValue} placeholder={"test"}/>);
        expect(getByText("one")).toBeDefined();
    });

    it('should change value', async function () {
        const { getByText } = render(
            <WithFilterHOC options={options} onChange={onChange} placeholder={"test"}/>);
        expect(getByText("test")).toBeDefined();
        await selectEvent.select(getByText("test"), "two");
        waitFor(() => expect(getByText("two")).toBeDefined);
    });
});