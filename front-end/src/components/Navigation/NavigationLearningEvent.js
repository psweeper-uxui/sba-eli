import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dropdown, List } from "semantic-ui-react";
import NavigationLearningEventItem from "./NavigationLearningEventItem";

export default class NavigationLearningEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learningEvents: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = process.env.REACT_APP_SERVICE_HOST + `/learning_events/`;

    const eventParams = {
      course_id: this.props.learningPathId,
      module_id: this.props.learningObjectiveId
    };

    axios
      .get(url, { params: eventParams })
      .then(res => {
        const learningEvents = res.data;
        this.setState({ learningEvents });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderLearningEvents(learningEvents = []) {
    if (learningEvents.length) {
      const course_id = this.props.learningPathId;
      const module_id = this.props.learningObjectiveId;
      return learningEvents.map(event => {
        const path =
          `/learning_paths/${course_id}` +
          `/learning_objectives/${module_id}` +
          `/learning_events/${event.id}`;
        return (
          <NavigationLearningEventItem
            key={event.id + course_id + module_id}
            path={path}
            name={event.title}
          />
        );
      });
    }

    return <NavigationLearningEventItem path="/" name="No data" />;
  }

  render() {
    // const learningObjectivePath = `learning_paths/${this.props.learningPathId}` + this.props.path;
    const learningObjectivePath = this.props.learningPathId + this.props.path;

    return (
      <List.Item><Link to={learningObjectivePath}>{this.props.name}</Link></List.Item>
    );
  }
}
