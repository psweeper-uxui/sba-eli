import React, { Component } from "react";
import { Item, Divider, Button, Icon, Dropdown } from "semantic-ui-react";
import TopicContentEventList from "./TopicContentEventList";
import "./topicContentView.css";

export default class TopicContentView extends Component {
  topicListOptions() {
    if (this.props.topicsList.length) {
      const topics = this.props.topicsList;
      const options = topics.map((topic, idx) => {
        return {
          key: topic.id,
          value: "topic" + topic.id.toString(),
          text: topic.name
        };
      });

      return (
        <div className={"mobile only topic-content-select"}>
          <Dropdown
            placeholder={"Select a Topic..."}
            options={options}
            selection
            fluid
            onChange={this.handleChange}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  renderTopicsList(topicsList) {
    if (topicsList.length) {
      return topicsList.map(topic => {
        let ref = "topic" + topic.id.toString();
        this[ref] = React.createRef();
        return (
          <div
            key={"topicContentView" + topic.id}
            className={"topic-content-view"}
            ref={this[ref]}
          >
            <Item.Group className={"topic-content-item-group"}>
              <Item className="topic-content-item">
                <Item.Image
                  src="https://via.placeholder.com/400"
                  className={"computer large screen widescreen only"}
                />

                <Item.Content>
                  <Item.Header className={"topic-content-item-header"}>
                    {topic.name}
                  </Item.Header>
                  <Item.Meta># of Learning Events (Time)</Item.Meta>
                  <Item.Description>
                    This is a desciption for the Topic: {topic.name}
                  </Item.Description>
                  <Divider />
                  <Button className={"topic-content-share-button"}>
                    <Icon
                      className={"topic-content-share-button-icon"}
                      name={"share"}
                    />
                  </Button>
                </Item.Content>
              </Item>
            </Item.Group>

            <TopicContentEventList
              course_id={this.props.course_id}
              module_id={topic.id}
            />
          </div>
        );
      });
    } else {
      return <div />;
    }
  }

  scrollToTopic(ref) {
    this[ref].current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  handleChange = (e, { name, value }) => this.scrollToTopic(value);

  render() {
    return (
      <React.Fragment>
        {this.topicListOptions()}
        {this.renderTopicsList(this.props.topicsList)}
      </React.Fragment>
    );
  }
}
