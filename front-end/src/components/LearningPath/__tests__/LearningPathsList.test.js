import React from 'react';
import LearningPathsList from '../LearningPathsList';
import { shallow, mount } from 'enzyme';

describe('LearningPathsList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LearningPathsList/>);

    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <div>', () => {
    const wrapper = shallow(<LearningPathsList/>);

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <ul>', () => {
    const wrapper = shallow(<LearningPathsList/>);

    expect(wrapper.find('ul').length).toEqual(1);
  });
  
  it('should render a 4 <li>', () => {
    const lps = [
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
      { id: 3, name: "Course 3" },
      { id: 4, name: "Course 4" },
    ]

    const wrapper = mount(<LearningPathsList/>);
    wrapper.setState({learningPaths: lps})

    expect(wrapper.find('li').length).toEqual(4);
  });
});
