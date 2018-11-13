import React from 'react'
import LearningPathsItem from './LearningPathsItem';

const LearningPathsList = () => {
  const items = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'},
    {id: 4, name: 'Course 4'},
  ]
  const itemsList = items.map(item => {
    return(
      <LearningPathsItem key={item.id} item={item} />
    )
  });

  return(
    <div>
      <ul>
        {itemsList}
      </ul>
    </div>
  )
}

export default LearningPathsList;
