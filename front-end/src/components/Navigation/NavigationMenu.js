import React, {Component} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class NavigationMenu extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({
    activeItem: name
  })

  render() {
    const {activeItem} = this.state

    return (
        <Menu vertical>

          <Menu.Item as={ Link }
                     to='/'
                     name='dashboard'
                     active={activeItem === 'dashboard'}
                     onClick={this.handleItemClick}>
            Dashboard
          </Menu.Item>

          <Menu.Item as={ Link }
                     to='/learning_paths'
                     name='learning_paths'
                     active={activeItem === 'learning_paths'}
                     onClick={this.handleItemClick}>
            Learning Paths
          </Menu.Item>

          <Dropdown item text='Learning Objectives'>
            <Dropdown.Menu>
              <Dropdown.Item as={ Link } to='/learning_objectives/LO1' text='LO 1'/>
              <Dropdown.Item as={ Link } to='/learning_objectives/LO2' text='LO 2'/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
    )
  }
}