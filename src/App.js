import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import Question from './Question';
import Suggestion from './Suggestion';

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
  getSuggestion = () => {
    let index = Math.floor(Math.random() * this.state.allTopics.length);
    console.log(this.state.allTopics[index]);
    this.handleDisplayChange("suggestion");
    this.state.selectedTopic = this.state.allTopics[index];
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Segment inverted>
            {this.state.display == "question" ? <Question onDisplayChange={this.handleDisplayChange} allTopics={this.state.allTopics} getSuggestion={this.getSuggestion} /> : this.state.display == "suggestion" ? <Suggestion allTopics={this.state.allTopics} selectedTopic={this.state.selectedTopic} />
              : <p>Ok, fine then.</p>}
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
          </Segment>
        </div>
      </div>
    );
  }
}
export default App;
