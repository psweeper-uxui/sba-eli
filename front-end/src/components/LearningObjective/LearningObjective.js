import React, { Component } from "react";
import axios from "axios";
import { Header } from "semantic-ui-react";
import LearningEventsList from "../LearningEvent/LearningEventsList";

export default class LearningObjective extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learningObjective: {}
    };
  }

  componentDidMount() {
    this.learningObjectiveObject();
  }

  async learningObjectiveObject() {
    const objective_id = this.props.match.params.id;
    const url =
      process.env.REACT_APP_SERVICE_HOST + `/learning_events/${objective_id}`;

    const eventParams = {
      course_id: this.props.match.params.course_id
    };

    axios
      .get(url, { params: eventParams })
      .then(res => {
        const learningObjective = res.data;
        this.setState({ learningObjective });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const learningObjective = this.state.learningObjective;

    return (
      <div>
        <Header as="h1">Learning Objective {learningObjective.id}</Header>
        <Header as="h3">{learningObjective.name}</Header>
        <Header as="h4">Micro Learning Events:</Header>
        <LearningEventsList
          course_id={learningObjective.id}
          module_id={learningObjective.module_id}
        />
      </div>
    );
  }
}
