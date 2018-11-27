import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Input, Form} from 'semantic-ui-react'
import NavigationLearningPath from "./NavigationLearningPath";

export default class NavigationMenu extends Component {
  state = {
    activeItem: 'dashboard'
  }

  handleItemClick = (e, {name}) => this.setState({
    activeItem: name
  })

  render() {
    const {activeItem} = this.state

    return (
        <Menu vertical>

          <Menu.Item as={Link}
                     to='/'
                     name='dashboard'
                     active={activeItem === 'dashboard'}
                     onClick={this.handleItemClick}>
            Dashboard
          </Menu.Item>

          <Menu.Item as={Link}
                     to='/learning_paths'
                     name='learning_paths'
                     active={activeItem === 'learning_paths'}
                     onClick={this.handleItemClick}>
            Learning Paths
          </Menu.Item>
          <Menu.Menu>
            <NavigationLearningPath />
          </Menu.Menu>
          <Menu.Item>
            <Form method='GET' action='/search'>
            <Input icon='search' placeholder='Search' name='searchTerm' />
            </Form>
          </Menu.Item>
        </Menu>
    )
  }
}