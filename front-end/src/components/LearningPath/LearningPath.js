import React from "react";
import axios from "axios";
import { Header, Divider, Grid, Accordion } from "semantic-ui-react";
import LearningObjectivesList from "../LearningObjective/LearningObjectivesList";
import TopicSideBar from "../TopicSideBar/TopicSidebar";

class LearningPath extends React.Component {
  state = {
    learningPath: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchLearningPath(id);
  }

  fetchLearningPath(id) {
    const url = process.env.REACT_APP_SERVICE_HOST + "/learning_paths/" + id;

    axios.get(url).then(res => {
      const learningPath = res.data;
      this.setState({ learningPath });
    });
  }

  render() {
    const courseId = this.props.match.params.id;

    return (
      <div>
        <a href="/">Back to Home</a>
        <Header as="h1">{this.state.learningPath.name}</Header>
        <Divider />
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={3} computer={3}>
              <TopicSideBar course_id={courseId} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={3} computer={11}>
              <div />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LearningPath;
