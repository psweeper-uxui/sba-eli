import React from 'react'
import { Card } from 'semantic-ui-react';

const LearningPathsItem = (props) => {
  return(
    <Card>
      <Card.Content>
        <Card.Header><a href={`/learning_paths/${props.id}`}>{props.name}</a></Card.Header>
      </Card.Content>
    </Card>
  )
}

export default LearningPathsItem;
