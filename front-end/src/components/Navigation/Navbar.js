import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown ,Menu } from 'semantic-ui-react';
import NavigationLearningPath from './NavigationLearningPath';

const LoggedOutView = () => {
  return(
    <div>
      <Link to={`#login`}>
        <Button primary>Login</Button>
      </Link>
      <Link to={`/signup`}>
        <Button secondary >Register</Button>
      </Link>
    </div>
  )
}

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
          <Menu.Menu position='right'>
            <Menu.Item>
              <LoggedOutView />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
};
