import React from "react";
import "../../App.css";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import NavigationDisplay from "./NavigationDisplay";

const Navigation = () => {
  return (
      <Router>
        <Grid className='sba'>
          <Grid.Row>
            <Navbar />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column mobile={16} tablet={8} computer={14}>
              <NavigationDisplay/>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
        </Grid>
      </Router>
  );
};

export default Navigation;
