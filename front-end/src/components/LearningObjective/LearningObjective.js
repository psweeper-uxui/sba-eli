import React from 'react';
import { Header } from 'semantic-ui-react';

export default class LearningObjective extends React.Component {
    constructor(props) {
        super(props);         
        
        this.state = {
            learningObjective: {}
        }     
    }

    async componentDidMount() {
        const learningObjective = await this.learningObjectiveObject();
        this.setState({ learningObjective });        
    }

    async learningObjectiveObject() {             
        const res = await fetch(
            "http://localhost:3000/learning_objectives/" +
            this.props.match.params.id + 
            "?course_id=1"
        )
        
        return await res.json();              
    }

    render() {
        var lo = this.state.learningObjective;

        return(            
            <div>
                <Header as='h1'>Learning Objective {lo.id}</Header>
                <Header as='h3'>{lo.name}</Header>
            </div>
          )
    }
}