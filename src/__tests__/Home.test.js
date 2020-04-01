import React from "react";
import Enzyme from "enzyme";
import Home from "../components/Home";

describe("<Home />", () => {
    it("should create.", () => {
        const wrapper = Enzyme.mount(<Home />);
        expect(wrapper).toBeTruthy();
    });
});