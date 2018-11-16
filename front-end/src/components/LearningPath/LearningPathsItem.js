import React from 'react'
import { List } from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const LearningPathsItem = (props) => {
  return(
    <List.Item><a href={`/learning_paths/${props.id}`}>{props.name}</a></List.Item>
  )
}

export default LearningPathsItem;
