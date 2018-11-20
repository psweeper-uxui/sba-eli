import React, { Component } from "react";
import axios from "axios";
import { List } from "semantic-ui-react";

import LearningObjectivesItem from "./LearningObjectivesItem";

export default class LearningObjectivesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objectivesList: []
    };
  }

  componentDidMount() {
    this.objectivesList();
  }

  objectivesList() {
    const url = process.env.REACT_APP_SERVICE_HOST + `/learning_objectives/`;

    const objectiveParams = {
      course_id: this.props.course_id
    };

    axios
      .get(url, { params: objectiveParams })
      .then(res => {
        const objectivesList = res.data;
        this.setState({ objectivesList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderObjectivesList(objectives = []) {
    if (objectives.length) {
      return objectives.map(objective => {
        return <LearningObjectivesItem key={objective.id} course_id={this.props.course_id} item={objective} />;
      });
    }
    return <List.Item>No data</List.Item>;
  }

  render() {
    return <List>{this.renderObjectivesList(this.state.objectivesList)}</List>;
  }
}
