import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import NavigationDropdownItem from "./NavigationDropdownItem";
import axios from "axios";
import {Dropdown} from 'semantic-ui-react'

export default class NavigationMenu extends Component {
  state = {
    activeItem: 'dashboard',
    learningPaths: [],
    learningObjectives: [],
    learningEvents: []
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
          let learningObjectivesData = []
          this.setState({learningPaths})

          learningPaths.map(lp => {

                const loUrl = process.env.REACT_APP_SERVICE_HOST +
                    "/learning_objectives/" +
                    "?course_id=" +
                    lp.id

                axios.get(loUrl)
                    .then(res2 => {
                      learningObjectivesData[lp.id] = res2.data
                    })
                    .then(tmp => {
                      const learningObjectives = learningObjectivesData;
                      this.setState({learningObjectives})
                    })
                    .catch(error => {
                      console.error(error)
                    })
              }
          )
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
              {this.populateLearningObjectives(lp.id)}
              </div>
          )
    }
    return lp_nav
  }

  populateLearningObjectives(courseId) {
    console.log("course id " + courseId)
    console.log(this.state.learningObjectives[courseId])
    let lo_nav = ''
    if (this.state.learningObjectives[courseId] && this.state.learningObjectives[courseId].length > 0) {
      lo_nav =
          this.state.learningObjectives[courseId].map(lo =>
              <NavigationDropdownItem key={lo.id} path={`/learning_objectives/${lo.id}`} name={lo.name} docs={this.state.learningEvents} />
          )
    }
    return lo_nav
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