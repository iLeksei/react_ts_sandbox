import React from "react";
// import {rest} from "msw";
import { render, fireEvent, waitFor, screen, prettyDOM, logRoles, act } from '@testing-library/react'
import {PreloaderButton} from "../../src/hooks_demo/PreloaderButton";

describe("PreloaderButton component", () => {

    beforeAll(() => {
        jest.useFakeTimers();
        fetch.doMockIf("https://jsonplaceholder.typicode.com/posts/1").mockResponse(JSON.stringify({id: 1}))
    })

    afterAll(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    })

    test("PreloaderButton should render", async () => {
        const { baseElement, getByRole, getByTestId } = render(<PreloaderButton/>);
        expect(getByRole("button").textContent).toContain("ClickMe");
        act(() => {
            fireEvent.click(getByRole("button"));
        })
        jest.runAllTicks();
        await waitFor(() => expect(getByRole('button').textContent).toContain("10"))
            .then(() => {screen.debug()})
        await waitFor(() => expect(getByTestId('post').textContent).toContain("1"))
    });

});