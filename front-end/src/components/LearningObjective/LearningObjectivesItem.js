import React from 'react';
import { List } from 'semantic-ui-react';


class LearningObjectivesItem extends React.Component {
  render() {
    return(
      <List.Item>{this.props.item.name}</List.Item>
    )
  }
}

export default LearningObjectivesItem;
