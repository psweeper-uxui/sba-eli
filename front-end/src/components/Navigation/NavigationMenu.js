import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import axios from "axios";
import NavigationLearningObjective from "./NavigationLearningObjective";

export default class NavigationMenu extends Component {
  state = {
    activeItem: 'dashboard',
    learningPaths: []
  }

  componentDidMount() {
    this.fetchNavigationData();
  }

  fetchNavigationData() {
    const lpUrl = process.env.REACT_APP_SERVICE_HOST +
        "/learning_paths"

    axios.get(lpUrl)
        .then(res => res.data)
        .then(learningPathData => {
          const learningPaths = learningPathData;
          this.setState({learningPaths})
        })
        .catch(error => {
          console.error(error)
        })

  }

  populateLearningPaths() {
    let lp_nav = ''
    if (this.state.learningPaths.length > 0) {
      lp_nav =
          this.state.learningPaths.map(lp =>
              <div>
                <Menu.Item key={lp.id}
                           as={Link}
                           to={`/learning_paths/${lp.id}`}
                    // name={`learning_paths_${lp.id}`}
                    // active={activeItem === `learning_paths_${lp.id}`}
                    // onClick={this.handleItemClick}
                           text={lp.name}>
                  {lp.name}
                </Menu.Item>
                <NavigationLearningObjective id={lp.id}/>
              </div>
          )
    }
    return lp_nav
  }

  handleItemClick = (e, {name}) => this.setState({
    activeItem: name
  })

  render() {

    const {activeItem} = this.state

    return (
        <Menu vertical>

          <Menu.Item as={Link}
                     to='/'
                     name='dashboard'
                     active={activeItem === 'dashboard'}
                     onClick={this.handleItemClick}>
            Dashboard
          </Menu.Item>

          <Menu.Item as={Link}
                     to='/learning_paths'
                     name='learning_paths'
                     active={activeItem === 'learning_paths'}
                     onClick={this.handleItemClick}>
            Learning Paths
          </Menu.Item>
          <Menu.Menu>
            {this.populateLearningPaths()}
          </Menu.Menu>
        </Menu>
    )
  }
}