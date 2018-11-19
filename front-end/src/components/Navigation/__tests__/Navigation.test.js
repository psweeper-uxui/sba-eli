import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';
import { shallow, mount } from 'enzyme';

describe('Navigation', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Navigation/>);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <div>', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper.find('div').length).toEqual(1);
  });
});
