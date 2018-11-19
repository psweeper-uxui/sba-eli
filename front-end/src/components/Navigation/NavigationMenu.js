import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import NavigationDropdownItem from "./NavigationDropdownItem";

export default class NavigationMenu extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({
    activeItem: name
  })

  render() {
    const lps = ['Jake', 'Jon', 'Thruster'];

    var lp_nav = lps.map(function (lp) {
      return <NavigationDropdownItem items={lp} path='/learning_paths/1' name={lp} />
    })

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
            {lp_nav}
          </Menu.Menu>
        </Menu>
    )
  }
}