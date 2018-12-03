import React from "react";
import axios from "axios";
import { Header, Divider, Grid } from "semantic-ui-react";

import TopicSideBar from "../TopicSideBar/TopicSidebar";
import TopicContentView from "../TopicContentView/TopicContentView";

class LearningPath extends React.Component {
  state = {
    learningPath: {},
    topicsList: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchLearningPath(id);
    this.fetchTopics(id);
  }

  fetchLearningPath(id) {
    const url = process.env.REACT_APP_SERVICE_HOST + "/learning_paths/" + id;

    axios.get(url).then(res => {
      const learningPath = res.data;
      this.setState({ learningPath });
    });
  }

  fetchTopics(pathId) {
    const url = process.env.REACT_APP_SERVICE_HOST + `/learning_objectives/`;

    const topicParams = {
      course_id: pathId
    };

    axios
      .get(url, { params: topicParams })
      .then(res => {
        const topicsList = res.data;
        this.setState({ topicsList });
      })
      .catch(error => {
        console.log(error);
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
              <TopicSideBar
                course_id={courseId}
                topicsList={this.state.topicsList}
              />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={3} computer={11}>
              <TopicContentView
                course_id={courseId}
                topicsList={this.state.topicsList}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LearningPath;
