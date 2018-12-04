import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

export default class NavigationLearningEventItem extends Component {
  render() {
    return (
      <Dropdown.Item href={this.props.path} text={this.props.name} />
    );
  }
}
