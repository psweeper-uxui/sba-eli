import React from 'react';


export default class LearningObjectivesItem extends React.Component {
    constructor(props) {
        super(props);                          
    }    

    render() {
        return(            
            <li>Learning Path: {this.props.item.name}</li>
        )
    }
}