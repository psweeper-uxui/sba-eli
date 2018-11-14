import React from 'react';
import LearningObjectivesItem from './LearningObjectivesItem';

export default class LearningObjectivesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectivesList: []
        }                      
    }

    componentDidMount() {
        console.log("did mount")        
        this.objectivesList().then(results => {
            console.log("results", results)
            var items = results.map(result => {
                
                return(
                    <LearningObjectivesItem key={result.id} item={result} />
                )
            })
            this.setState({
                objectivesList: items
            })
        });
    }
    
    objectivesList() {
        console.log("fetch");
        return fetch("http://localhost:3000/learning_objectives/?course_id=1")
        .then(data => {
            return data.json();
        }) 
    }

    render() {
        var los = this.state.objectivesList;
        console.log("los", los)
        return(            
            <div>
                <ul>
                    {los}
                </ul>
                
            </div>
        )
    }
}

// const LearningPathsList = () => {
//     const items = [
//       {id: 1, name: 'Course 1'},
//       {id: 2, name: 'Course 2'},
//       {id: 3, name: 'Course 3'},
//       {id: 4, name: 'Course 4'},
//     ]
//     const itemsList = items.map(item => {
//       return(
//         <LearningPathsItem key={item.id} item={item} />
//       )
//     });
  
//     return(
//       <div>
//         <ul>
//           {itemsList}
//         </ul>
//       </div>
//     )
//   }
  
//   export default LearningPathsList;