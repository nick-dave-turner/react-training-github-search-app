import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Card from "./Card";

const MOCK_DATA = {
  avatar_url: "AVATAR_URL PROP",
  html_url: "HTML_URL PROP",
  login: "LOGIN PROP"
};

describe("Card", () => {

  it("should be a function", () => {
    expect(Card).toBeInstanceOf(Function);
  });

  it("should render without crashing", () => {
    shallow(<Card />);
  });

  it("should match the snapshot with no props", () => {
    const component = renderer.create(<Card />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("should match the snapshot with props", () => {
    const component = renderer.create(<Card {...MOCK_DATA} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("When clicking delete button", () => {

    it("should call deleteUser event", () => {
      const mockCallBack = jest.fn();
      const button = shallow((<Card deleteUser={mockCallBack} />));

      button.find("button").simulate("click");
      expect(mockCallBack).toHaveBeenCalled();
    });

  });

});
