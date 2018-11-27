import React, { Component } from "react";
import { Card, Header } from "semantic-ui-react";

//Placeholder for testing purposes to handle unaccounted learning event types
export default class LearningEventInfoCard extends Component {
  render() {
    const event = this.props.event;
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>
              {event.title} {event.id}
            </Card.Header>
            <Card.Meta>{event.type}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Header as="h5">Url:</Header> {event.url}
            <Header as="h5">HTML Url:</Header> {event.html_url}
          </Card.Content>
        </Card>
      </div>
    );
  }
}
