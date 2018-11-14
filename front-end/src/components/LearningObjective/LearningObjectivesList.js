import React from 'react';
import LearningObjectivesItem from './LearningObjectivesItem';

export default class LearningObjectivesList extends React.Component {
    constructor(props) {        
        super(props);
        
        this.state = {
            objectivesList: []
        }                      
    }

    async componentDidMount() {                                       
        const objectivesList = await this.objectivesList()
        this.setState({ objectivesList });
    }
    
    async objectivesList() {        
        const res =  await fetch(
            process.env.REACT_APP_SERVICE_HOST +
            "/learning_objectives/" +
            "?course_id=" +
            this.props.course_id
        )
        
        return await res.json();
    }

    renderObjectivesList(objectives = []) {
        if(objectives.length) {
            return objectives.map(objective => {                
                return(
                    <LearningObjectivesItem key={objective.id} item={objective} />
                )
            })        
        }
        return <li>No data</li>
    }

    render() {               
        return(                        
            <ul>                    
                {this.renderObjectivesList(this.state.objectivesList)}
            </ul>                            
        )
    }
}