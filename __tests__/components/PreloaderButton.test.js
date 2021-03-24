import React from "react";
// import {rest} from "msw";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {PreloaderButton} from "../../src/hooks_demo/PreloaderButton";

describe("PreloaderButton component", () => {

    test("PreloaderButton should render", () => {
        fetch.doMockIf("https://jsonplaceholder.typicode.com/posts/1").mockResponse(JSON.stringify({id: 1}))
        render(<PreloaderButton/>);
        expect(screen.getByRole("button")).toContain("ClickMe");
    });

});