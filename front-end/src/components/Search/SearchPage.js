import React, {Component} from "react";
import "../../App.css";
import {Container, Grid, Header} from "semantic-ui-react";
import queryString from 'query-string';
import SearchFacets from "./SearchFacets";
import SearchResults from "./SearchResults";

export default class SearchPage extends Component {

  constructor(props) {
    super(props);

    let params = queryString.parse(this.props.location.search);

    this.state = {
      searchTerm: this.clean(params.searchTerm),
      urlParams: params
    };
  };

  clean(text) {
    if (text !== undefined && text.length > 0) {
      //TODO: do we want to remove special characters?
      return text.trim()
    }
    return ''
  }

  searchText() {
    if (this.state.searchTerm !== undefined
        && this.state.searchTerm !== '') {
      return `# Search Results for "${this.state.searchTerm}"`
    }
    //TODO: What do we want to do when no search term is available?
    return 'No search term entered'
  }

  render() {
    return (
        <div>
          <Grid.Row>
            <Header as='h1'>{this.searchText()}</Header>
            <SearchFacets urlParams={this.state.urlParams}/>
            <SearchResults urlParams={this.state.urlParams}/>
          </Grid.Row>
        </div>
    )
  }
}
