import React, { Component } from 'react';
import Question from './components/Question';
import Suggestion from './components/Suggestion';
import CreateSuggestion from './components/CreateSuggestion';

class SuggesterContainer extends Component {
  // state = {
  //   display: "Question",
  //   currentSuggestion,
  //   isLoading,
  //   isError,
  //   selectedLanguage,
  //   selectedType
  // }
  render() {
    return (
      <Grid>
        <Grid.Row columns={1} className="bground-img">
          <Grid.Column>
            <div style={{
              padding: "10em", width: "90rem", height: "50rem", marginLeft: "auto", marginRight: "auto"
            }}>
              {/* TODO fix labels/tags  */}
              {/* < Label attached="top right" color="violet" > JavaScript</Label> */}
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
            <Button basic inverted size="big" color="violet" onClick={sendTest}>TEST!!!</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <CreateSuggestion />
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
    )
  }
}
export default SuggesterContainer;