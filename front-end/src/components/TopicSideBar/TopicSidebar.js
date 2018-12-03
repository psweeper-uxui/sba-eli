import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import axios from "axios";
import TopicEventList from "./TopicEventList";

export default class TopicSideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicsList: [],
      activeIndex: 0
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state.activeIndex;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    this.topicsList();
  }

  topicsList() {
    const url = process.env.REACT_APP_SERVICE_HOST + `/learning_objectives/`;

    const objectiveParams = {
      course_id: this.props.course_id
    };

    axios
      .get(url, { params: objectiveParams })
      .then(res => {
        const topicsList = res.data;
        this.setState({ topicsList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderTopicsList(objectives = []) {
    const { activeIndex } = this.state;

    if (objectives.length) {
      return objectives.map((objective, i) => {
        return (
          <React.Fragment>
            <Accordion.Title
              active={activeIndex === i}
              index={i}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              {objective.name}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              <TopicEventList
                course_id={this.props.course_id}
                module_id={objective.id}
              />
            </Accordion.Content>
          </React.Fragment>
        );
      });
    }
    return (
      <div>
        <Accordion.Title>No Data</Accordion.Title>
        <Accordion.Content>Test Content</Accordion.Content>
      </div>
    );
  }

  render() {
    console.log("props", this.props);

    return (
      <Accordion>{this.renderTopicsList(this.state.topicsList)}</Accordion>
    );
  }
}
