import React from 'react';
import ReactDOM from 'react-dom';
import NavigationMenu from '../NavigationMenu';
import { shallow, mount } from 'enzyme';

describe('NavigationMenu', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationMenu/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});
