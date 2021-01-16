import React, { Component } from 'react';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import './App.css';
import Question from './components/Question';
import Suggestion from './components/Suggestion';
import { getHardcodedList } from './topicList';

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
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Icon name="envelope home" />
                </Grid.Column>
                <Grid.Column>
                  <span>About | </span>
                </Grid.Column>
                <Grid.Column>
                  <span>View Suggestions | </span>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <Grid>
            <Grid.Row columns={1} className="bground-img">
              <Grid.Column>
                <div style={{
                  padding: "10em"
                }}>
                  < Label attached="top right" color="violet" > JavaScript</Label>
                  {this.state.display === "question" ? <Question onDisplayChange={this.handleDisplayChange} allTopics={this.state.allTopics} getSuggestion={this.getSuggestion} /> : this.state.display === "suggestion" ? <Suggestion testProp="test" allTopics={this.state.allTopics} selectedTopic={this.state.selectedTopic} />
                    : <p>Ok, fine then.</p>}
                  {this.state.display !== "question" && <Button
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
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="App footer">
                  <span>© 2020 Leilani Leach </span>
                  <Icon name="envelope outline" />
                  <Icon name="linkedin" />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div >
    );
  }
}
export default App;
