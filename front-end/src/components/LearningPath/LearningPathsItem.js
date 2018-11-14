import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const LearningPathsItem = (props) => {
  return(
      <li><Link to={`/learning_paths/${props.id}`}>{props.name}</Link></li>
  )
}

export default LearningPathsItem;
