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

  learningObjectiveObject() {
    const objective_id = this.props.match.params.id;
    const url =
      process.env.REACT_APP_SERVICE_HOST +
      `/learning_objectives/${objective_id}`;

    const objectiveParams = {
      course_id: this.props.match.params.course_id
    };

    axios
      .get(url, { params: objectiveParams })
      .then(res => {
        console.log("res", res);
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
          course_id={this.props.match.params.id}
          module_id={this.props.match.params.course_id}
        />
      </div>
    );
  }
}
