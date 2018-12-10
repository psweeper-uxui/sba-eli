import React, { Component } from "react";
import LearningEventInfoCard from "./LearningEventInfoCard";
import LearningEventPage from "./LearningEventPage";
import LearningEventFile from "./LearningEventFile";

export default class LearningEventManager extends Component {
  renderEventContentByType() {
    const event = this.props.event;

    if (event.type === "Page") {
      return <LearningEventPage event={event} />;
    } else if (event.type === "File") {
      return <LearningEventFile event={event} />;
    } else {
      return <LearningEventInfoCard event={event} />;
    }
  }
  render() {
    return this.renderEventContentByType();
  }
}
