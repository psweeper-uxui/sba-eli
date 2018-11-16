import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const LearningPathsItem = (props) => {
  return(
    <li><a href={`/learning_paths/${props.id}`}>{props.name}</a></li>
  )
}

export default LearningPathsItem;
