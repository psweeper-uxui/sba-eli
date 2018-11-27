import React, {Component} from 'react'
import {Form, Input} from 'semantic-ui-react'
import MediaTypeFilters from "./MediaTypeFilters"

export default class SearchFacets extends Component {

  render() {
    return (
        <Form method='GET' action='/search'>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Media Type</label>
              <MediaTypeFilters/>
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Button fluid>Cancel</Form.Button>
            <Form.Button fluid type='submit'>Apply</Form.Button>
          </Form.Group>
          <Input type='hidden' name='searchTerm' value={this.props.searchTerm} />
        </Form>
    )
  }
}