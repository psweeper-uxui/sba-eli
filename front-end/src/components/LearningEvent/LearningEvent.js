import React, { Component } from "react";
import { Header, Icon, Card } from 'semantic-ui-react';

export default class LearningEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learningEvent: {}
    };
  }
  
  async componentDidMount() {
    const learningEvent = await this.learningEventObject();
    this.setState({ learningEvent });
  }

  async learningEventObject() {
    const course_id = this.props.match.params.course_id;
    const module_id = this.props.match.params.module_id;
    const le_id = this.props.match.params.id;
    const res = await fetch(
      process.env.REACT_APP_SERVICE_HOST +  
      `/learning_events/${le_id}` +        
      `?course_id=${course_id}` +
      `&module_id=${module_id}`
    );

    return await res.json();
  }
  
  render() {
    const event = this.state.learningEvent;    
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>{event.title} {event.id}</Card.Header>
            <Card.Meta>{event.type}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Header as="h5">Url:</Header> {event.url}
            <Header as="h5">HTML Url:</Header> {event.html_url}
          </Card.Content>
        </Card>        
      </div>
    )
  }
}
