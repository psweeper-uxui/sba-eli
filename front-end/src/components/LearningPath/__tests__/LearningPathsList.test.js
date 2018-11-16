import React from 'react';
import { List } from 'semantic-ui-react';
import LearningPathsList from '../LearningPathsList';
import { shallow, mount } from 'enzyme';

describe('LearningPathsList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LearningPathsList/>);

    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <div>', () => {
    const wrapper = shallow(<LearningPathsList/>);

    expect(wrapper.find('div').length).toEqual(1);
  });

  describe('rendering the list', () => {
    var wrapper;
    
    beforeEach(function() {
      const lps = [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
        { id: 3, name: "Course 3" },
        { id: 4, name: "Course 4" },
      ]

      wrapper = mount(<LearningPathsList/>);
      wrapper.setState({learningPaths: lps})
    })  

    it('should render a <List>', () => {
      expect(wrapper.find(List).length).toEqual(1);
    });
    
    it('should render a 4 <li>', () => {
      expect(wrapper.find(List.Item).length).toEqual(4);
    });
  })
});
