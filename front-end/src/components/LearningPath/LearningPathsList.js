import React from 'react';
import axios from 'axios';
import LearningPathsItem from './LearningPathsItem';

class LearningPathsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      learningPaths: []
    }
  }

  componentDidMount() {
    this.fetchLearningPaths();
  }

  fetchLearningPaths() {
    const url = process.env.REACT_APP_SERVICE_HOST + "/learning_paths"

    axios.get(url)
      .then(res => {
        const learningPaths = res.data;
        this.setState({ learningPaths })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const learningPathItems = this.state.learningPaths.map(c => <LearningPathsItem key={c.id} id={c.id} name={c.name} />)

    return(
      <div>
        <ul>
          {learningPathItems}
        </ul>
      </div>
    )
  }
}

export default LearningPathsList;
