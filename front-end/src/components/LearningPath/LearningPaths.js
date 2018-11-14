import React from 'react';
import LearningPathsList from './LearningPathsList';

class LearningPaths extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {}
  }

  render () {
    return(
      <div>
        Learning Paths
        <LearningPathsList /> 
      </div>
    )
  }
}

export default LearningPaths;
