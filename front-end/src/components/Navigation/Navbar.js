import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {}

  render() {

    const learningPathOptions = [
      {
        text: "LP 1",
        value: "LP 1"
      },
      {
        text: "LP 2",
        value: "LP 2"
      },
      {
        text: "LP 3",
        value: "LP 3"
      },
    ]

    return(
      <Menu>
        <Dropdown placeholder='Learning Paths' selection options={learningPathOptions} />
      </Menu>
    )
  }
};

