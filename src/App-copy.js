import React, { Component } from 'react';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    <Grid>
      {/* HEADER NAVBAR */}
      <Grid.Row columns={4}>
        <Grid.Column>
          <Icon name="home" />
        </Grid.Column>
        <Grid.Column>
          <span>About | </span>
        </Grid.Column>
        <Grid.Column>
          <span>View Suggestions | </span>
        </Grid.Column>
        <Grid.Column>
          <span>Add Suggestion | </span>
        </Grid.Column>
      </Grid.Row>
      {/* MAIN BODY */}
      <Grid.Row>
        <Grid.Column>
          {/* segment here */}
        </Grid.Column>
      </Grid.Row>
      {/* FOOTER */}
      <Grid.Row>
        <Grid.Column>
          <span>© 2020 Leilani Leach </span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}
export default App;
