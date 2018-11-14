import React from 'react';
import axios from 'axios';

class LearningPath extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      learningPath: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3000/learning_paths/${id}`)
      .then(res => {
        const learningPath = res.data
        this.setState({ learningPath })
      })
  }

  render() {
    return(
      <div>
        <h1>{this.state.learningPath.name}</h1>
      </div>
    )
  }
}

export default LearningPath;
