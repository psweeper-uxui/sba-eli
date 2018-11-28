import React, {Component} from "react";
import "../../App.css";
import {Grid, Header} from "semantic-ui-react";
import queryString from 'query-string';
import SearchFacets from "./SearchFacets";
import SearchResults from "./SearchResults";

export default class SearchPage extends Component {
  render() {
    let params = queryString.parse(this.props.location.search);
    //TODO: does this need to be sanitized?
    let searchTerm = params.searchTerm

    return (
        <Grid>
          <Grid.Row>
            <Header as='h3'>Search Results for '{searchTerm}'</Header>
          </Grid.Row>
          <Grid.Row>
            <SearchFacets searchTerm={searchTerm} />
          </Grid.Row>
          <Grid.Row>
            <SearchResults/>
          </Grid.Row>
        </Grid>
    )
  }
}
