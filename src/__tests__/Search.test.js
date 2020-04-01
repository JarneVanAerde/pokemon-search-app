import React from "react";
import Enzyme from "enzyme";
import Search from "../components/Search";

describe("<Search />", () => {
    it("should create.", () => {
        const wrapper = Enzyme.mount(<Search />);
        expect(wrapper).toBeTruthy();
    });
});