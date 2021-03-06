import React from "react";
import { List } from "semantic-ui-react";
import LearningEventsList from "../LearningEventsList";
import { shallow, mount } from "enzyme";

describe("LearningEventsList", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<LearningEventsList />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <List>", () => {
    const wrapper = shallow(<LearningEventsList />);

    expect(wrapper.find(List).length).toEqual(1);
  });

  it("should render at least one <List.Item>", () => {
    const wrapper = mount(<LearningEventsList course_id="1" module_id="1" />);

    expect(wrapper.find("li").length).toBeGreaterThanOrEqual(1);
  });
});
