import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';
import SubjectFilters from '../SubjectFilters';

describe('SubjectFilters', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SubjectFilters/>);

    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render 6 <Checkboxes> for 6 Subjects', () => {
    const wrapper = shallow(<SubjectFilters/>);

    expect(wrapper.find(Form.Checkbox).length).toEqual(6);
  });

  it('should render the checkbox with the expected data from the filter', () => {
    const wrapper = shallow(<SubjectFilters/>);

    expect(wrapper.find(Form.Checkbox).get(0).key).toEqual('finance');
    expect(wrapper.find(Form.Checkbox).get(0).props.value).toEqual('finance');
    expect(wrapper.find(Form.Checkbox).get(0).props.id).toEqual('subject_filter_finance');
    expect(wrapper.find(Form.Checkbox).get(0).props.label.children).toEqual('Finance');
  });
});
