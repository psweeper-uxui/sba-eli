import React, {Component} from 'react'
import {Grid, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class SearchResults extends Component {

  constructUri(id, metadataObject) {
    if (id === undefined
        && metadataObject !== undefined) {

      let uri = '/learning_paths/'
      if (metadataObject.learning_path_id !== undefined) {
        uri += metadataObject.learning_path_id
        if (metadataObject.learning_objective_id !== undefined) {
          uri += `/learning_objectives/` + metadataObject.learning_objective_id
          uri += `/learning_events/` + id
        } else {
          uri += `/learning_objectives/` + id
        }
      } else {
        uri += id
      }
      return uri
    }
    return ''
  }

  render() {
    return this.props.searchResults.map((sr, index) => (
        <Grid.Row className="search_result_item" key={'search_result_' + index} id={'search_result' + index}>
          <Grid.Column className="search_result_image" width={3}>
            <Link to={this.constructUri(sr.id, sr.meta_data)}>
              <img src={sr.thumbnail} title={sr.name} alt={sr.name}/>
            </Link>
          </Grid.Column>
          <Grid.Column className="search_result_content" width={11}>
            <Header className="search_result_title" as='h3'>
              <Link to={this.constructUri(sr.id, sr.meta_data)}>
                {sr.name}
              </Link>
            </Header>
            <div className="search_result_description">{sr.description}</div>
          </Grid.Column>
        </Grid.Row>
    ));
  }
}
