import React from "react";
import Enzyme from "enzyme";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";

describe("<App />", () => {
    it("should create.", () => {
        const wrapper = Enzyme.mount(
            <Router>
                <App />
            </Router>
        );
        expect(wrapper).toBeTruthy();
    });
});