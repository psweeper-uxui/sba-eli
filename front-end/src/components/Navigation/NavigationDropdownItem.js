import React from "react";
import {Dropdown} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default class NavigationDropdownItem extends React.Component {
  render() {
    return <Dropdown item text={this.props.name}>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to={this.props.path} text={this.props.name} />
      </Dropdown.Menu>
    </Dropdown>
  }
}