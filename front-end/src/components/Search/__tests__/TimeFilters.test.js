import React from "react";
import { shallow } from "enzyme";
import { Form } from "semantic-ui-react";
import TimeFilters from "../TimeFilters";

describe("TimeFilters", () => {
  it("should render 3 <Checkboxes> for 3 time lengths", () => {
    const wrapper = shallow(<TimeFilters />);

    expect(wrapper.find(Form.Checkbox).length).toEqual(3);
  });

  it("should render the checkbox with the expected data from the filter", () => {
    const wrapper = shallow(<TimeFilters />);

    expect(wrapper.find(Form.Checkbox).get(0).key).toEqual("short");
    expect(wrapper.find(Form.Checkbox).get(0).props.value).toEqual("short");
    expect(wrapper.find(Form.Checkbox).get(0).props.id).toEqual("time_filter_short");
    expect(wrapper.find(Form.Checkbox).get(0).props.label.children).toEqual(
      "Less than 1 minute"
    );
  });
});
