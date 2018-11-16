import React from 'react';
import { Header } from 'semantic-ui-react';

class LearningObjective extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      learningObjective: {}
    }
  }

  async componentDidMount() {
    const learningObjective = await this.learningObjectiveObject();
    this.setState({ learningObjective });
  }

  async learningObjectiveObject() {
    const res = await fetch(
      "http://localhost:3000/learning_objectives/" +
      this.props.match.params.id +
      "?course_id=1"
    )

    return await res.json();
  }

  render() {
    const learningObjective = this.state.learningObjective;

    return(
      <div>
        <Header as='h1'>Learning Objective {learningObjective.id}</Header>
        <Header as='h3'>{learningObjective.name}</Header>
      </div>
    )
  }
}

export default LearningObjective;
