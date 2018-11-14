import React from 'react';


export default class LearningObjectivesItem extends React.Component {
    render() {
        return(            
            <li>Learning Path: {this.props.item.name}</li>
        )
    }
}