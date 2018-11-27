import React, {Component} from "react";
import "../../App.css";
import {Grid} from "semantic-ui-react";
import SearchFacets from "./SearchFacets";
import SearchResults from "./SearchResults";

export default class SearchPage extends Component {
  render() {
    return (
        <Grid>
          <Grid.Row>
            <SearchFacets/>
          </Grid.Row>
          <Grid.Row>
            <SearchResults/>
          </Grid.Row>
        </Grid>
    )
  }
}
