import React, {Component} from 'react'
import axios from "axios";
import {Grid, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class SearchResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };
  };

  componentDidMount() {
    this.fetchData();
  }

  buildUrl() {
    let url = process.env.REACT_APP_SERVICE_HOST + "/searches?";
    //TODO: verify that malicious data isn't being passed via the params
    if (this.props.urlParams.searchTerm !== undefined) {
      url += "keywords=" + this.props.urlParams.searchTerm
    }
    if (this.props.urlParams.subject !== undefined) {
      url += "&subject=" + this.props.urlParams.subject
    }
    if (this.props.urlParams.mediaType !== undefined) {
      url += "&media_types=" + this.props.urlParams.mediaType
    }
    if (this.props.urlParams.time !== undefined) {
      url += "&duration=" + this.props.urlParams.time
    }
    return url
  }

  fetchData() {
    axios
        .get(this.buildUrl())
        .then(res => {
          const searchResults = res.data;
          this.setState({searchResults});
        })
        .catch(error => {
          console.error(error);
        });

    //TODO: static results should be removed when API is finalized
    const searchResults = [{
      "id": 1,
      "name": "Title of Content",
      "description": "Sesame snaps tart pastry sweet roll cupcake. " +
          "Chocolate bar jelly beans cheesecake cake cupcake. Liquorice icing tootsie roll chupa chups" +
          "fruitcake gingerbread. Sesame snaps tart pastry sweet roll cupcake. " +
          "Sesame snaps tart pastry sweet roll cupcake. " +
          "Chocolate bar jelly beans cheesecake cake cupcake. Liquorice icing tootsie roll chupa chups" +
          "fruitcake gingerbread. Sesame snaps tart pastry sweet roll cupcake. ",
      "content_type": "learning-objective",
      "uri": "/learning_paths/7/learning_objectives/3",
      "meta_data": {},
      "thumbnail": "https://picsum.photos/200"
    }]
    this.setState({searchResults});
  }

  render() {
    return this.state.searchResults.map((sr, index) => (
        <Grid.Row key={'search_result' + index}>
          <Grid.Column width={3}>
            <Link to={sr.uri}>
              <img src={sr.thumbnail} title={sr.name} alt={sr.name}/>
            </Link>
          </Grid.Column>
          <Grid.Column width={11}>
            <div>Type: {sr.content_type}</div>
            <Header as='h3'>
              <Link to={sr.uri}>{sr.name}</Link>
            </Header>
            <div>{sr.description}</div>
          </Grid.Column>
        </Grid.Row>
    ));
  }
}
