import React, {Component} from "react";
import "../../App.css";
import "../../assets/style/search.css"
import {Button, Container, Grid, Header, Icon, Segment, Sidebar} from "semantic-ui-react";
import queryString from 'query-string';
import SearchFacets from "./SearchFacets";
import SearchResults from "./SearchResults";

export default class SearchPage extends Component {

  constructor(props) {
    super(props);

    let params = queryString.parse(this.props.location.search);

    this.state = {
      searchTerm: this.clean(params.searchTerm),
      urlParams: params,
      visibleDrawer: false
    };
  };

  handleToggle = animation => () =>
      this.setState({animation, visibleDrawer: !this.state.visibleDrawer})

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
    const {visibleDrawer} = this.state

    return (
        <Container className='search_page'>
          <Grid.Row>
            <Header as='h1'>{this.searchText()}</Header>
            <Button icon labelPosition='left'
                    basic floated='right'
                    type='submit'
                    id='add_filters'
                    onClick={this.handleToggle('HELLO')}>
              <Icon name='sliders'/>
              Add Filters
            </Button>
          </Grid.Row>
          <Grid.Row>
          <Sidebar.Pushable>
            <Sidebar as={Segment} animation='overlay' direction='top' visible={visibleDrawer}>
                <SearchFacets urlParams={this.state.urlParams}/>
            </Sidebar>
            <Sidebar.Pusher>
                <SearchResults urlParams={this.state.urlParams}/>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
          </Grid.Row>
        </Container>
    )
  }
}
