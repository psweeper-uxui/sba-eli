import React from 'react';
import '../../App.css';
import LearningPaths from '../LearningPath/LearningPaths';
import { Container, Divider, Header } from 'semantic-ui-react';

const Dashboard = () => {
  return (
    <div>
      <Container textAlign='center'><Header as='h1'>Dashboard</Header></Container>
      <Divider hidden />
      <LearningPaths />
    </div>
	)
}

export default Dashboard;
