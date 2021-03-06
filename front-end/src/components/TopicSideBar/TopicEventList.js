import React, { Component } from "react";
import axios from "axios";
import { Item, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class TopicEventList extends Component {
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

  renderEventsList(events = []) {
    const { course_id, module_id } = this.props;
    const url = `/learning_paths/${course_id}/learning_objectives/${module_id}/learning_events/`;

    if (events.length) {
      return events.map((event, index) => {
        return (
          <Item key={"eventListItem" + index}>
            <Item.Header>
              <Icon name="circle" />
              <Link to={url + event.id}>{event.title}</Link>
            </Item.Header>
          </Item>
        );
      });
    }
    return (
      <Item>
        <Item.Header>
          <Icon name="circle" />
          Test
        </Item.Header>
      </Item>
    );
  }

  render() {
    return (
      <Item.Group divided>
        {this.renderEventsList(this.state.eventsList)}
      </Item.Group>
    );
  }
}
