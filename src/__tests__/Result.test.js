import React from "react";
import Enzyme from "enzyme";
import Result from "../components/Result";

describe("<Result />", () => {
    it("should create.", () => {
        const wrapper = Enzyme.mount(<Result />);
        expect(wrapper).toBeTruthy();
    });
});