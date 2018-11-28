import React, { Component } from "react";
import { Dropdown, Header } from "semantic-ui-react";
import NavigationLearningObjective from "./NavigationLearningObjective";
import axios from "axios";

export default class NavigationLearningPath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learningPaths: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = process.env.REACT_APP_SERVICE_HOST + "/learning_paths";

    axios
      .get(url)
      .then(res => {
        const learningPaths = res.data;
        this.setState({ learningPaths });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return this.state.learningPaths.map(lp => (
      <Dropdown.Item
        key={lp.id}
      >
        <Dropdown pointing='left' text={lp.name}>
          <Dropdown.Menu>
            <Header as='h1'><a  href={`/learning_paths/${lp.id}`}>{lp.name}</a></Header>
            <Dropdown.Divider/>
            <Dropdown.Header>Learning Objectives</Dropdown.Header>
            <Dropdown.Divider/>
              <NavigationLearningObjective learningPathId={lp.id} />
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Item>
    ));
  }
}
