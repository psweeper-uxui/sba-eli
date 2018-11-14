import React from 'react';
import LearningPath from '../LearningPath';
import { shallow, mount } from 'enzyme';

describe('LearningPath', () => {
  it('should render correctly', () => {
    const match = { params: { id: 1 } }
    const wrapper = shallow(<LearningPath match={match}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <div>', () => {
    const match = { params: { id: 1 } }
    const wrapper = shallow(<LearningPath match={match}/>);

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
