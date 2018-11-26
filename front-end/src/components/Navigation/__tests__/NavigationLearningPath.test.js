import React from 'react';
import NavigationLearningPath from '../NavigationLearningPath'
import { shallow, mount } from 'enzyme';

describe('NavigationLearningPath', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationLearningPath/>);
    
    expect(wrapper).toMatchSnapshot();
  });

});
