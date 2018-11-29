import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import Navbar from '../Navbar';
import NavigationLearningPath from '../NavigationLearningPath';
import { shallow } from 'enzyme';

describe('Navbar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <Menu>', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper.find(Menu).length).toEqual(1);
    expect(wrapper.find(Menu.Menu).exists()).toBe(true);
  });

  it('should render a <Dropdown> of all learning paths', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper.find(Dropdown).length).toEqual(1);
    expect(wrapper.find(Dropdown.Menu).length).toEqual(1);
    expect(wrapper.find(NavigationLearningPath).length).toEqual(1);
  });
});
