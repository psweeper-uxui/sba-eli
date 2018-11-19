import React, { Component } from 'react';
import LearningEventsItem from './LearningEventsItem'

export default class LearningEventsList extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      eventsList: []
    }
  }
      
  async componentDidMount() {                                       
    const eventsList = await this.eventsList()
    this.setState({ eventsList });
  }

  async eventsList() {        
    const course_id = this.props.course_id;
    const module_id = this.props.module_id;        
    const res = await fetch(
      process.env.REACT_APP_SERVICE_HOST +  
      "/learning_events" +        
      `?course_id=${course_id}` +
      `&module_id=${module_id}`
    );               
    
    return await res.json();
  }

  renderEventsList(events = []) {  
    if(events.length) {
      return events.map(event => {                
        return(
            <LearningEventsItem key={event.id} item={event} />
        )
      })        
    }
    return <li>No data</li>
  }

  render() {               
    return(                        
      <ul>                    
          {this.renderEventsList(this.state.eventsList)}
      </ul>                            
    )
  }
}