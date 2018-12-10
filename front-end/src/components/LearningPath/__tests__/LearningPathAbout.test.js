import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import LearningPathAbout from '../LearningPathAbout';
import { shallow } from 'enzyme';

describe('LearningPathAbout', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LearningPathAbout />);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should display a button with provided text that opens window', () => {
    const wrapper = shallow(<LearningPathAbout>TEST</LearningPathAbout>);
    
    expect(wrapper.find(Modal).exists()).toBe(true);
    expect(wrapper.find(Modal).prop("trigger").props["children"]).toContain("TEST");
  });
  
  it('should properly page by icon clicks', () => {
    const wrapper = shallow(<LearningPathAbout />);
    
    expect(wrapper.find(Icon).length).toBe(4);
    
    expect(wrapper.state("page")).toEqual(1);
    wrapper.find(Icon).at(1).simulate('click');
    expect(wrapper.state("page")).toEqual(2);
    wrapper.find(Icon).at(2).simulate('click');
    expect(wrapper.state("page")).toEqual(3);
    wrapper.find(Icon).at(3).simulate('click');
    expect(wrapper.state("page")).toEqual(4);
    wrapper.find(Icon).at(0).simulate('click');
    expect(wrapper.state("page")).toEqual(1);
  });
  
  it('should display a skip button for first 3 pages', () => {
    const wrapper = shallow(<LearningPathAbout />);
    
    expect(wrapper.find(Button).length).toEqual(1);
    wrapper.find(Icon).at(1).simulate('click');
    expect(wrapper.find(Button).length).toEqual(1);
    wrapper.find(Icon).at(2).simulate('click');
    expect(wrapper.find(Button).length).toEqual(1);
    wrapper.find(Icon).at(3).simulate('click');
    expect(wrapper.find(Button).length).toEqual(0);
  });
});
