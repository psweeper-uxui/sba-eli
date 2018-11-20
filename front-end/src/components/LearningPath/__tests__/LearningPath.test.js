import React from 'react';
import { Header } from 'semantic-ui-react';
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
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(LearningObjectivesList).exists()).toBe(true);
  });
});
