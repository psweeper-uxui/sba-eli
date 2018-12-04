import React from 'react';
import {shallow} from 'enzyme';
import {Form} from "semantic-ui-react";
import MediaTypeFilters from "../MediaTypeFilters";

describe('MediaTypeFilters', () => {
  it('should render 6 <Checkboxes> for 6 media types', () => {
    const wrapper = shallow(<MediaTypeFilters/>);

    expect(wrapper.find(Form.Checkbox).length).toEqual(6);
  });

  it('should render the checkbox with the expected data from the filter', () => {
    const wrapper = shallow(<MediaTypeFilters/>);

    expect(wrapper.find(Form.Checkbox).get(0).key).toEqual('video');
    expect(wrapper.find(Form.Checkbox).get(0).props.value).toEqual('video');
    expect(wrapper.find(Form.Checkbox).get(0).props.id).toEqual('mediatype_filter_video');
    expect(wrapper.find(Form.Checkbox).get(0).props.label.children).toEqual('Video');
  });

});
