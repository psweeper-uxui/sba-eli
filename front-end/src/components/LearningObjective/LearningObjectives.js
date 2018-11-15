import React from 'react';
import LearningObjectivesList from './LearningObjectivesList';

export default class LearningObjectives extends React.Component {
    constructor(props) {
        //get course_id
        super(props);
    }
    render() {        
        return(            
            <div>
                <LearningObjectivesList course_id={this.props.course_id} />
            </div>
        )
    }
}