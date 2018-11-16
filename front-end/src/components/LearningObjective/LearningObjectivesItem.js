import React from 'react';


export default class LearningObjectivesItem extends React.Component {
    render() {
        return(            
            <li>{this.props.item.name}</li>
        )
    }
}
