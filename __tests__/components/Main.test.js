import React from "react";
import {shallow, mount}  from "enzyme";
import configureStore from 'redux-mock-store'
import thunk   from 'redux-thunk'
import fetchMock  from 'jest-fetch-mock';
import {Counter}  from "../../src/components/Counter/Counter";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Counter component", () => {

    let props = {
        increment: jest.fn(),
        decrement: jest.fn(),
        reset: jest.fn(),
        counter: 10,
    };

    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('should render', () => {
        const instance = shallow(<Counter />);
        console.log(instance.debug());

    });

});