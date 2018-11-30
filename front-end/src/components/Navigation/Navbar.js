import React, { Component } from 'react';
import { Dropdown ,Menu } from 'semantic-ui-react';
import NavigationLearningPath from './NavigationLearningPath';

export default class Navbar extends Component {
  state = {}

  render() {

    return(
      <div className="navbar">
        <Menu>
          <Menu.Item header href={`/`}>Dashboard</Menu.Item>
          <Dropdown text='Learning Paths' item>
            <Dropdown.Menu>
              <NavigationLearningPath />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    )
  }
};
