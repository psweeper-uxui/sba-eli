import React from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import LearningPathsItem from './LearningPathsItem';

class LearningPathsList extends React.Component {
  state = {
    learningPaths: []
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
    let result = <h3>There are no learning paths available to view at this time</h3>
    if (this.state.learningPaths.length > 0) {
      result = this.state.learningPaths.map(c => <LearningPathsItem key={c.id} id={c.id} name={c.name}/>)
    }

    return(
      <div>
        <Card.Group>
          {result}
        </Card.Group>

      </div>
    )
  }
}

export default LearningPathsList;
