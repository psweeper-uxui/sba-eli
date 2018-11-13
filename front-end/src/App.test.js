import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('should render App correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div>', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div').length).toEqual(1);
  });
});


