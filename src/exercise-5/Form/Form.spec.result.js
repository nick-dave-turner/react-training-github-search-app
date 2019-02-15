import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Form from "./Form";

describe("Form", () => {

  it("should be a function", () => {
    expect(Form).toBeInstanceOf(Function);
  });

  it("should render without crashing", () => {
    shallow(<Form />);
  });

  it("should match the snapshot", () => {
    const component = renderer.create(<Form />).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("When filling in form", () => {
    // @todo add some tests
  });

  describe("When handleChange is called", () => {
    // @todo add some tests
  });

  describe("When handleSubmit is called", () => {
    // @todo add some tests
  });

});
