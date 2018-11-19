import React, { Component } from "react";

export default class LearningEventsItem extends Component {
  render() {
    return <li>Learning Event: {this.props.item.title}</li>;
  }
}
