import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
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
      <div key={"lp" + lp.id}>
        <Menu.Item
          header
          key={lp.id}
          as={Link}
          to={`/learning_paths/${lp.id}`}
          text={lp.name}
        >
          {lp.name}
        </Menu.Item>
        <NavigationLearningObjective learningPathId={lp.id} />
      </div>
    ));
  }
}
