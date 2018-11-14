import React from 'react';
import LearningObjectives from '../LearningObjectives';
import { shallow } from 'enzyme';

describe('LearningObjectives', () => {
  it('should render a <div>', () => {
    const wrapper = shallow(<LearningObjectives/>);

    expect(wrapper.find('div').length).toEqual(1);
  });
});
