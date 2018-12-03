import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import axios from "axios";

export default class TopicContentEventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsList: []
    };
  }

  componentDidMount() {
    this.eventsList();
  }

  eventsList() {
    const url = process.env.REACT_APP_SERVICE_HOST + `/learning_events/`;

    const eventParams = {
      course_id: this.props.course_id,
      module_id: this.props.module_id
    };

    axios
      .get(url, { params: eventParams })
      .then(res => {
        const eventsList = res.data;
        this.setState({ eventsList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderEventList(eventList) {
    if (eventList.length) {
      return eventList.map(event => {
        return (
          <Item>
            <Item.Image size="tiny" src="https://via.placeholder.com/50" />

            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Meta>Event Type</Item.Meta>
            </Item.Content>
          </Item>
        );
      });
    } else {
      return (
        <div>
          <Item.Group divided>
            <Item>
              <Item.Image size="tiny" src="https://via.placeholder.com/50" />

              <Item.Content>
                <Item.Header>Learning Event Test Title</Item.Header>
                <Item.Meta>No Data</Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      );
    }
  }

  render() {
    return (
      <Item.Group>{this.renderEventList(this.state.eventsList)}</Item.Group>
    );
  }
}
