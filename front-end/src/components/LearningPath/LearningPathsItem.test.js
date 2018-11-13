import React from 'react';
import LearningPathsItem from './LearningPathsItem';
import { shallow, mount } from 'enzyme';

describe('LearningPath', () => {
  it('should render correctly', () => {
    const item = { id: 1, name: "LP 1" }
    const wrapper = shallow(<LearningPathsItem item={item} />); 
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <li>', () => {
    const item = { id: 1, name: "LP 1" }
    const wrapper = shallow(<LearningPathsItem item={item} />); 

    expect(wrapper.find('li').length).toEqual(1);
  });
});
