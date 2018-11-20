import React from "react";
import { List } from "semantic-ui-react";

const LearningObjectivesItem = (props) => {
  return(
    <List.Item><a href={`/learning_objectives/${props.item.id}`}>{props.item.name}</a></List.Item>
  )
}

export default LearningObjectivesItem;
