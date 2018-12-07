import React from "react";
import "../../App.css";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import NavigationDisplay from "./NavigationDisplay";

const Navigation = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={16}>
                <NavigationDisplay />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Router>
    </div>
  );
};

export default Navigation;
