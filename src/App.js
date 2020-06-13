import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './App.css';
import Question from './Question';

class App extends Component {
  state = {
    allTopics: ['test1', 'test2', 'test3', 'test4'],
    // filteredTopics: [...allTopics],
    selectedTopic: null,
    display: 'question',
  };
  handleDisplayChange = (status) => {
    this.setState({ display: status });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.display == "question" ? <Question onDisplayChange={this.handleDisplayChange} allTopics={this.state.allTopics} /> : this.state.display == "suggestion" ? <p>Yay!</p> : <p>Ok, fine then.</p>}
          {this.state.display != "question" && <Button
            basic
            animated
            inverted
            size="big"
            color="blue"
            onClick={() => this.handleDisplayChange("question")}
          >
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="home" />
            </Button.Content>
          </Button>}
        </div>
      </div>
    );
  }
}
export default App;
