import React from 'react'

const LearningPathsItem = (props) => {
  console.log(props)
  return(
    <li>Learning Path: {props.name}</li>
  )
}

export default LearningPathsItem;
