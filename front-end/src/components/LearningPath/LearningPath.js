import React from 'react';
import axios from 'axios';
import LearningObjectivesList from '../LearningObjective/LearningObjectivesList'

class LearningPath extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      learningPath: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchLearningPath(id);
  }

  fetchLearningPath(id) {
    const url = process.env.REACT_AOO_SERVICE_HOST + "/learning_paths" + id
    
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
        <h1>{this.state.learningPath.name}</h1>
        <LearningObjectivesList course_id= { courseId }/>
      </div>
    )
  }
}

export default LearningPath;
