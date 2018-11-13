import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import LearningPaths from"./components/LearningPath/LearningPaths";
import LearningPath from "./components/LearningPath/LearningPath";
import Error from "./components/Error";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/learning_paths" exact component={LearningPaths} />
            <Route path="/learning_paths/:id" exact component={LearningPath} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
