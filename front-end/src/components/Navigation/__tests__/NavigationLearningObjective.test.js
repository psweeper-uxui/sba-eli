import React from 'react';
import NavigationLearningObjective from '../NavigationLearningObjective'
import { shallow, mount } from 'enzyme';

describe('NavigationLearningObjective', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationLearningObjective/>);
    
    expect(wrapper).toMatchSnapshot();
  });

});
