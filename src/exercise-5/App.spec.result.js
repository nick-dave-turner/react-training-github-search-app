import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import App from "./App";

const MOCK_DATA = {items: [
  {
    id: 1,
    avatar_url: "AVATAR_URL PROP 1",
    html_url: "HTML_URL PROP 1",
    login: "LOGIN PROP 1"
  },
  {
    id: 2,
    avatar_url: "AVATAR_URL PROP 2",
    html_url: "HTML_URL PROP 2",
    login: "LOGIN PROP 2"
  }
]};

describe("App", () => {

  it("should be a function", () => {
    expect(App).toBeInstanceOf(Function);
  });

  it("should render without crashing", () => {
    shallow(<App />);
  });

  it("should match the snapshot with no users", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("should match the snapshot with with users", () => {
    const component = renderer.create(<App />);
    const instance = component.getInstance();

    // Add users
    instance.handleAddUser(MOCK_DATA);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Component state", () => {

    it("should render initially with users equal to []", () => {
      const component = renderer.create(<App />);
      const instance = component.getInstance();

      expect(instance.state.users).toEqual([]);
    });

    describe("When handleAddUser is called", () => {
      const component = renderer.create(<App />);
      const instance = component.getInstance();

      // Add users
      instance.handleAddUser(MOCK_DATA);

      expect(instance.state.users).toEqual(MOCK_DATA.items);
    });

    describe("When handleDeleteUser is called", () => {
      const component = renderer.create(<App />);
      const instance = component.getInstance();

      // Add users
      instance.handleAddUser(MOCK_DATA);
      // Remove first user
      instance.handleDeleteUser(1);

      expect(instance.state.users).toEqual([MOCK_DATA.items[1]]);
    });

  });

});
