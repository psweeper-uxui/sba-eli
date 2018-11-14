import React from 'react';
import LearningObjectivesList from './LearningObjectivesList';

export default class LearningObjectives extends React.Component {
    constructor(props) {
        super(props);                          
    }    

    render() {
        console.log("LOs");
        return(            
            <div>
                <LearningObjectivesList />
            </div>
        )
    }
}