import React from "react";
import axios from "axios";
import { Header, Divider, Grid } from "semantic-ui-react";

import TopicSideBar from "../TopicSideBar/TopicSidebar";
import TopicContentView from "../TopicContentView/TopicContentView";
import LearningEvent from "../LearningEvent/LearningEvent";
import LearningPathBreadCrumb from "./LearningPathBreadcrumb";

class LearningPath extends React.Component {
  state = {
    learningPath: {},
    topicsList: []
  };

  componentDidMount() {
    this.initialFunctions();
  }

  componentWillReceiveProps() {
    this.initialFunctions();
  }

  initialFunctions() {
    const id = this.props.match.params.id;
    this.fetchLearningPath(id);
    this.fetchTopics(id);
    this.showLearningEvent();
  }

  showLearningEvent() {
    this.setState({
      isLearningEvent:
        this.props.match.params.topicId && this.props.match.params.eventId
    });
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

  renderRightColumnContent() {
    const isLearningEvent = this.state.isLearningEvent;

    if (isLearningEvent) {
      //This is to mimic react routing for the learning event. Learning event component
      //should be refactored to pass props
      const match = {
        params: {
          id: this.props.match.params.eventId,
          module_id: this.props.match.params.topicId,
          course_id: this.props.match.params.id
        }
      };
      return <LearningEvent match={match} />;
    } else {
      return (
        <TopicContentView
          course_id={this.props.match.params.id}
          topicsList={this.state.topicsList}
        />
      );
    }
  }

  render() {
    const courseId = this.props.match.params.id;

    const sideBarProps = {
      course_id: courseId,
      topicsList: this.state.topicsList,
      module_id: this.props.match.params.topicId,
      event_id: this.props.match.params.eventId
    };

    const breadCrumbProps = this.props.match.params;

    return (
      <div>
        <LearningPathBreadCrumb
          pathName={this.state.learningPath.name}
          {...breadCrumbProps}
        />
        <Header as="h1">{this.state.learningPath.name}</Header>
        <Divider />
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={3} computer={3}>
              <TopicSideBar {...sideBarProps} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={3} computer={11}>
              {this.renderRightColumnContent()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LearningPath;
