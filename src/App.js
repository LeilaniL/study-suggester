import React, { Component } from 'react';
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
          <Question onDisplayChange={this.handleDisplayChange} allTopics={this.state.allTopics} />
        </div>
      </div>
    );
  }
}
export default App;
