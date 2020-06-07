import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <button onClick={this.getSuggestion}>Yes</button>
          <button onClick={() => this.setState({ display: 'nope' })}>No</button>
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
