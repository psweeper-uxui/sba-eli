import React from 'react';
import LearningObjectivesItem from '../LearningObjectivesItem';
import { shallow } from 'enzyme';

describe('LearningObjectivesItem', () => {
  it('should render correctly', () => {
    const item = { id: 1, name: "LO 1" }
    const wrapper = shallow(<LearningObjectivesItem item={item} />); 
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <li>', () => {
    const item = { id: 1, name: "LO 1" }
    const wrapper = shallow(<LearningObjectivesItem item={item} />); 

    expect(wrapper.find('li').length).toEqual(1);
  });
});
