import React from 'react';
import { List } from 'semantic-ui-react';
import LearningObjectivesItem from './LearningObjectivesItem';

class LearningObjectivesList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      objectivesList: []
    }
  }

  async componentDidMount() {
    const objectivesList = await this.objectivesList()
    this.setState({ objectivesList });
  }
  
  async objectivesList() {
    const courseId = this.props.course_id
    const res =  await fetch(
      process.env.REACT_APP_SERVICE_HOST +
      "/learning_objectives/" +
      "?course_id=" +
      courseId
    )

    return await res.json();
  }

  renderObjectivesList(objectives = []) {
    if(objectives.length) {
      return objectives.map(objective => {
        return(
          <LearningObjectivesItem key={objective.id} item={objective} />
        )
      })
    }
    return <List.Item>No data</List.Item>
  }

  render() {
    return(
        <List>
          {this.renderObjectivesList(this.state.objectivesList)}
        </List>
    )
  }
}

export default LearningObjectivesList;
