import React, { Component } from 'react';
import {Dropdown, Form, Input, Menu} from 'semantic-ui-react';
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
          <Menu.Item>
            <Form method='GET' action='/search'>
              <Form.Group inline>
                <Form.Input icon='search' placeholder='Search' name='searchTerm' />
                <Form.Button type="submit">
                  Submit
                </Form.Button>
              </Form.Group>
            </Form>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
};
