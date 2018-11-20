import React from 'react';
import ReactDOM from 'react-dom';
import NavigationDropdownItem from '../NavigationDropdownItem'
import { shallow, mount } from 'enzyme';

describe('NavigationDropdownItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationDropdownItem/>);
    
    expect(wrapper).toMatchSnapshot();
  });

});
