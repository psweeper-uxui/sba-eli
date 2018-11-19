import React, { Component } from "react";
import axios from "axios";
import LearningEventsItem from "./LearningEventsItem";

export default class LearningEventsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsList: []
    };
  }

  async componentDidMount() {
    const eventsList = await this.eventsList();
    this.setState({ eventsList });
  }

  async eventsList() {
    const course_id = this.props.course_id;
    const module_id = this.props.module_id;

    const url =
      process.env.REACT_APP_SERVICE_HOST +
      `/learning_events/` +
      `?course_id=${course_id}` +
      `&module_id=${module_id}`;

    try {
      const res = await axios.get(url);
      return await res.data;
    } catch (error) {}
  }

  renderEventsList(events = []) {
    if (events.length) {
      return events.map(event => {
        return <LearningEventsItem key={event.id} item={event} />;
      });
    }
    return <li>No data</li>;
  }

  render() {
    return <ul>{this.renderEventsList(this.state.eventsList)}</ul>;
  }
}
