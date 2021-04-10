import React, { Component } from 'react';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import './App.css';
import { getHardcodedList } from './topicList';
import Firebase from './firebase';

// Includes Navbar, ShowAll/Browse?

const firebase = new Firebase();

const sendTest = () => {
  // firebase.addSuggestion({
  //   'name': 'Fourth Topic', 'language': 'C#'
  // });
  firebase.getRandom();
}

//TODO fix size of div so black section doesn't resize all the time
//TODO refactor to use hooks?

class App extends Component {
  state = {
    allTopics: getHardcodedList(),
    // filteredTopics: [...allTopics],
    selectedTopic: null,
    display: 'question',
  };
  handleDisplayChange = (status) => {
    this.setState({ display: status });
  }
  getSuggestion = () => {
    //TODO remove selected topic so no repeat suggestions
    let index = Math.floor(Math.random() * this.state.allTopics.length);
    const newState = this.state.allTopics[index];
    this.setState({ selectedTopic: newState });
    this.handleDisplayChange("suggestion");
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App">
            {/* Navbar */}
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <span><Icon name="envelope" /> </span>
                </Grid.Column>
                <Grid.Column>
                  <span>About | </span>
                </Grid.Column>
                <Grid.Column>
                  <span>Add Suggestion | </span>
                </Grid.Column>
                <Grid.Column>
                  <span>View All | </span>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* End Navbar */}
            {/* returns LogIn, Register, or SuggesterContainer */}
            {/* Footer */}
          </div>
        </div>
      </div >
    );
  }
}
export default App;
