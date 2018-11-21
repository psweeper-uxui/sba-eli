import React from 'react';
import {Menu} from 'semantic-ui-react'
import NavigationMenu from '../NavigationMenu';
import { shallow, mount } from 'enzyme';

describe('NavigationMenu', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavigationMenu/>);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Dashboard Menu', () => {
    const wrapper = shallow(<NavigationMenu/>);

    expect(wrapper.find('Menu').length).toEqual(1);
  });
});
