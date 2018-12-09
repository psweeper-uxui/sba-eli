import React from 'react';
import { Header } from 'semantic-ui-react';
import LearningPathAbout from '../LearningPathAbout';
import { shallow } from 'enzyme';

describe('LearningPathAbout', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LearningPathAbout />);
    
    expect(wrapper).toMatchSnapshot();
  });
});