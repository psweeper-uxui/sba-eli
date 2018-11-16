import React from 'react';
import LearningPathsList from './LearningPathsList';

class LearningPaths extends React.Component {
  state  = {}

  render () {
    return(
      <div>
        <h2>Learning Paths</h2>
        <LearningPathsList /> 
      </div>
    )
  }
}

export default LearningPaths;
