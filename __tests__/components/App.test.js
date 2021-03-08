import {shallow, mount} from "enzyme";
import React from "react";
import {Provider} from "react-redux";
import App from "../../src/App";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("App component", () => {

    it('should render', () => {
        const store = mockStore({
            counterReducer: {
                CounterAction: jest.fn(),
                counter: 0,
                increment: jest.fn(),
                decrement: jest.fn(),
                reset: jest.fn(),
            }
        })
        const instance = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        console.log(instance.debug());
    });

})