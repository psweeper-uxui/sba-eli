import React from 'react';
import LearningPaths from './LearningPaths';
import { shallow } from 'enzyme';

describe('LearningPaths', () => {
  it('should render a <div>', () => {
    const wrapper = shallow(<LearningPaths/>);

    expect(wrapper.find('div').length).toEqual(1);
  });
});
