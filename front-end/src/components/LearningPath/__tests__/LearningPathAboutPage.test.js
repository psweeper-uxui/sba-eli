import React from 'react';
import { Header } from 'semantic-ui-react';
import LearningPathAboutPage from '../LearningPathAboutPage';
import { shallow } from 'enzyme';

describe('LearningPathAbout', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LearningPathAboutPage />);
    
    expect(wrapper).toMatchSnapshot();
  });
});