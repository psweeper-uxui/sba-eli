import React from 'react';
import axios from 'axios';
import { Header, Divider } from 'semantic-ui-react';
import LearningObjectivesList from '../LearningObjective/LearningObjectivesList'

class LearningPath extends React.Component {
  state = {
    learningPath: {} 
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchLearningPath(id);
  }

  fetchLearningPath(id) {
    const url = process.env.REACT_APP_SERVICE_HOST + "/learning_paths/" + id
    
    axios.get(url)
      .then(res => {
        const learningPath = res.data
        this.setState({ learningPath })
      })
  }

  render() {
    const courseId = this.props.match.params.id;

    return(
      <div>
        <a href="/">Back to Home</a>
        <Header as='h1'>{this.state.learningPath.name}</Header>
        <Divider/>
        <Header as='h3'>Learning Objectives</Header>
        <LearningObjectivesList course_id= { courseId }/>
      </div>
    )
  }
}

export default LearningPath;
