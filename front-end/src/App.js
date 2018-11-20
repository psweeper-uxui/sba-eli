import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
};

export default App;
