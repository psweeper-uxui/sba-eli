import React from 'react';
import NavigationLearningEvent from '../NavigationLearningEvent'
import { shallow, mount } from 'enzyme';

describe('NavigationLearningEvent', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationLearningEvent/>);
    
    expect(wrapper).toMatchSnapshot();
  });

});
