import React from 'react';
import LearningObjectivesList from './LearningObjectivesList';

class LearningObjectives extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {        
    return(
      <div>
        <LearningObjectivesList course_id={this.props.course_id} />
      </div>
    )
  }
}

export default LearningObjectives;
