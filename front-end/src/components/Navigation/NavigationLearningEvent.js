import React, {Component} from 'react'
import {Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import NavigationLearningEventItem from "./NavigationLearningEventItem";

export default class NavigationLearningEvent extends Component {
  //TODO: loop for the event items pass in data
  render() {
    return <Dropdown item
                     as={Link}
                     to={this.props.path}
                     text={this.props.name}>
      <Dropdown.Menu>
        <NavigationLearningEventItem path="/" name="TODO" />
      </Dropdown.Menu>
    </Dropdown>
  }
}
