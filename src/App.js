import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Segment } from 'semantic-ui-react';
//TODO: Fix 'findDOMnode' console warning from using Button component

class App extends Component {
  state = {
    allTopics: ['test1', 'test2', 'test3', 'test4'],
    // filteredTopics: [...allTopics],
    selectedTopic: null,
    display: 'question',
  };
  getSuggestion = () => {
    let index = Math.floor(Math.random() * this.state.allTopics.length);
    console.log(this.state.allTopics[index]);
    this.setState({ display: 'suggestion' });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Would you like a suggestion for what to work on today?</p>
          <Segment inverted>
            <Button
              animated
              inverted
              size="big"
              floated="right"
              color="green"
              onClick={this.getSuggestion}
            >
              <Button.Content visible>Yes!</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <Button
              animated
              inverted
              size="big"
              floated="left"
              color="red"
              onClick={() => this.setState({ display: 'nope' })}
            >
              <Button.Content visible>No</Button.Content>
              <Button.Content hidden>
                <Icon name="ban" />
              </Button.Content>
            </Button>
          </Segment>
        </header>
        <div className="hidden" id="results">
          <p>Results!</p>
        </div>
        {this.state.display === 'nope' && (
          <div>
            <p>Ok, fine. Do whatever you want.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
