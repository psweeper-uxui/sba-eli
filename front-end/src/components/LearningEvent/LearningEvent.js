import React, { Component } from "react";

export default class LearningEvent extends Component {
  state = {
    learningEvent: {}
  };

  //TODO hook into service layer for event objects
  async componentDidMount() {
    const learningEvent = await this.learningEventObject();
    this.setState({ learningEvent });
  }

  async learningEventObject() {
    const res = await fetch(
      "http://localhost:3000/learning_events/" +
        this.props.match.params.id +
        "?course_id=1"
    );

    return await res.json();
  }
  //How to render the objects we get back?
  render() {
    return <div>Learning Event</div>;
  }
}
