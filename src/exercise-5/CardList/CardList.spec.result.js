import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import CardList from "./CardList";

const MOCK_DATA = [{
  id: 1,
  avatar_url: "AVATAR_URL PROP",
  html_url: "HTML_URL PROP",
  login: "LOGIN PROP"
}];

describe("CardList", () => {

  it("should be a function", () => {
    expect(CardList).toBeInstanceOf(Function);
  });

  it("should render without crashing", () => {
    shallow(<CardList users={MOCK_DATA} />);
  });

  it("should match the snapshot", () => {
    const component = renderer.create(<CardList users={MOCK_DATA} />).toJSON();
    expect(component).toMatchSnapshot();
  });

});
