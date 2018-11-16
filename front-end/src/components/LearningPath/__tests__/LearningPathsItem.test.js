import React from 'react';
import { List } from 'semantic-ui-react';
import LearningPathsItem from '../LearningPathsItem';
import { shallow } from 'enzyme';

describe('LearningPathsItem', () => {
  it('should render correctly', () => {
    const item = { id: 1, name: "LP 1" }
    const wrapper = shallow(<LearningPathsItem item={item} />); 
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a <li>', () => {
    const item = { id: 1, name: "LP 1" }
    const wrapper = shallow(<LearningPathsItem key={item.id} name={item.name} />); 

    expect(wrapper.find(List.Item).length).toEqual(1);
    expect(wrapper.find('a')).not.toBeNull();
  });
});
