import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Dashboard from "../Dashboard/Dashboard";
import LearningPath from "../LearningPath/LearningPath";
import LearningPaths from "../LearningPath/LearningPaths";
import LearningObjective from "../LearningObjective/LearningObjective";
import LearningObjectives from "../LearningObjective/LearningObjectives";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  return (
    <Router>
      <div>
        <NavigationMenu/>

        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/learning_paths" component={LearningPaths}/>
          <Route exact path="/learning_paths/:id" component={LearningPath} />
          <Route exact path="/learning_objectives/" component={LearningObjectives} />
          <Route exact path="/learning_objectives?course_id=:id" component={LearningObjective}/>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
