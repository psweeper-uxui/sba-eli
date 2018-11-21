import React from "react";
import { List } from "semantic-ui-react";

const LearningObjectivesItem = (props) => {
  const url = "/learning_paths/" + props.course_id + "/learning_objectives/" + props.item.id
  return(
    <List.Item><a href={url}>{props.item.name}</a></List.Item>
  )
}

export default LearningObjectivesItem;
