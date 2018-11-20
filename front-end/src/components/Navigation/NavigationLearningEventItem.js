import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NavigationLearningEventItem extends Component {
  render() {
    return (
      <Dropdown.Item as={Link} to={this.props.path} text={this.props.name} />
    );
  }
}
