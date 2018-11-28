import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import NavigationLearningPath from '../NavigationLearningPath';
import { shallow, mount } from 'enzyme';

describe('NavigationLearningPath', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationLearningPath/>);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <Dropdown>', () => {
    const wrapper = mount(<NavigationLearningPath/>);
    const learningPaths = [
      {id: 1, name: "Learning Path 1"},
      {id: 2, name: "Learning Path 2"},
      {id: 3, name: "Learning Path 3"}
    ]

    wrapper.setState({learningPaths: learningPaths})

    expect(wrapper.find(Dropdown.Item).length).toEqual(3);
  });
});
