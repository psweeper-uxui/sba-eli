import React, {Component} from 'react'
import axios from "axios";
import {Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import NavigationLearningEventItem from "./NavigationLearningEventItem";

export default class NavigationLearningEvent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      learningObjectiveId: 1, //TODO: remove hardcode
      learningEvents: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = process.env.REACT_APP_SERVICE_HOST +
        "/learning_objectives/" +
        "?course_id=" +
        this.state.learningObjectiveId

    axios.get(url)
        .then(res => {
          const learningObjectives = res.data;
          this.setState({learningObjectives})
        })
        .catch(error => {
          console.error(error)
        })
  }

  render() {

    return <Dropdown item
                     as={Link}
                     to={this.props.path}
                     text={this.props.name}>
      <Dropdown.Menu>
        this.state.learningEvents.map(event =>
          <NavigationLearningEventItem path="/" name="TODO" />
        )
      </Dropdown.Menu>
    </Dropdown>
  }
}
