import React from 'react';
import { Header } from 'semantic-ui-react';

export default class LearningObjective extends React.Component {
    constructor(props) {
        super(props);
        this.match = props.match; 
        
        this.state = {
            learningObjective: {}
        }     
    }

    componentDidMount() {
        this.learningObjectiveObject().then(result => this.setState({
            learningObjective: result
        }));
    }

    learningObjectiveObject() {             
        return fetch("http://localhost:3000/learning_objectives/" + this.match.params.id + "?course_id=1")
        .then(data => {
            return data.json();
        })              
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