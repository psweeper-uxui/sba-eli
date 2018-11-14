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
    axios.get(`http://localhost:3000/learning_paths`)
      .then(res => {
        const learningPaths = res.data;
        this.setState({ learningPaths })
      })
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.learningPaths.map(c => <LearningPathsItem key={c.id} id={c.id} name={c.name} />)}
        </ul>
      </div>
    )
  }
  

}

export default LearningPathsList;

