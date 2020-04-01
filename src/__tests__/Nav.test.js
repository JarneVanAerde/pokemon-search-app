import React from "react";
import Enzyme from "enzyme";
import Nav from "../components/shared/Nav";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Nav />", () => {
    it("should create.", () => {
        const wrapper = Enzyme.mount(
            <Router>
                <Nav />
            </Router>
        );
        expect(wrapper).toBeTruthy();
    });
});