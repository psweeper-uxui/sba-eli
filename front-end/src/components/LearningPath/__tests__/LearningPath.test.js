import React from 'react';
import LearningPath from '../LearningPath';
import LearningObjectivesList from '../../LearningObjective/LearningObjectivesList'
import { shallow } from 'enzyme';

describe('LearningPath', () => {
  it('should render correctly', () => {
    const match = { params: { id: 1 } }
    const wrapper = shallow(<LearningPath match={match}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render all parts', () => {
    const match = { params: { id: 1 } }
    const wrapper = shallow(<LearningPath match={match}/>);

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find("h1").length).toEqual(1);
    expect(wrapper.find(LearningObjectivesList).exists()).toBe(true)
  });

});
