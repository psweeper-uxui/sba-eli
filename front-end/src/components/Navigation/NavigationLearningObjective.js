import React, {Component} from 'react'
import NavigationLearningEvent from "./NavigationLearningEvent";
import axios from "axios";

export default class NavigationLearningObjective extends Component {

  constructor(props) {
    super(props);

    this.state = {
      learningObjectives: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = process.env.REACT_APP_SERVICE_HOST +
        "/learning_objectives/" +
        "?course_id=" +
        this.props.learningPathId

    axios.get(url)
        .then(res => {
          const learningObjectives = res.data;
          this.setState({learningObjectives})
        })
        .catch(error => {
          console.error(error)
        })
  }

  render() {
    return (
        this.state.learningObjectives.map(lo =>
            <NavigationLearningEvent key={lo.id} path={`/learning_objectives/${lo.id}`} name={lo.name}/>
        )
    )
  }
}