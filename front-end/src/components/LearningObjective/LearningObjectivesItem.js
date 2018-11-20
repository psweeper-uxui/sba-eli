import React, { Component } from "react";
import { List } from "semantic-ui-react";

export default class LearningObjectivesItem extends Component {
  render() {
    return <List.Item>{this.props.item.name}</List.Item>;
  }
}
