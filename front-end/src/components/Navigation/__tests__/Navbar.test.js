import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import Navbar from '../Navbar';
import { shallow } from 'enzyme';

describe('Navbar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <Menu>', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper.find(Menu).length).toEqual(1);
  });

  it('should render a <Dropdown> of learning paths', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper.find(Dropdown).length).toEqual(1);
  });
});
