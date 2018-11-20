import React from 'react';
import ReactDOM from 'react-dom';
import NavigationLearningEventItem from '../NavigationLearningEventItem'
import { shallow, mount } from 'enzyme';

describe('NavigationLearningEventItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationLearningEventItem/>);
    
    expect(wrapper).toMatchSnapshot();
  });

});
