import React from 'react';
import LearningPathsList from './LearningPathsList';
import { Container, Header, Divider } from 'semantic-ui-react';

class LearningPaths extends React.Component {
  state  = {}

  render () {
    return(
      <div>
        <Container textAlign="center">
          <Header as='h1'>Learning Paths</Header>
        </Container>
        <Divider hidden/>
        <Container>
          <LearningPathsList /> 
        </Container>
      </div>
    )
  }
}

export default LearningPaths;
