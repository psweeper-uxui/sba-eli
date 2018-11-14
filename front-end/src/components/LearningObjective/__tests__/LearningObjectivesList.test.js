import React from 'react';
import LearningObjectivesList from '../LearningObjectivesList';
import { shallow, mount } from 'enzyme';

describe('LearningObjectivesList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LearningObjectivesList/>);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <ul>', () => {
    const wrapper = shallow(<LearningObjectivesList/>);

    expect(wrapper.find('ul').length).toEqual(1);
  });
  
  it('should render at least one <li>', () => {
    const wrapper = mount(<LearningObjectivesList course_id="1"/>);

    expect(wrapper.find('li').length).toBeGreaterThanOrEqual(1);
  });
});
