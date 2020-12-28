import React, { Component } from 'react';
import { Button, Icon, Label, Segment } from 'semantic-ui-react';
import './App.css';
import Question from './components/Question';
import Suggestion from './components/Suggestion';
import { getHardcodedList } from './topicList';
import Firebase from './firebase';

//eslint-disable-next-line
// 
// const sendTest = firebase.database.collection('todo').add({title: 'first todo', description: 'new todo' })
// .then(documentReference => {
//   console.log('document reference ID', documentReference.id)
// })
// .catch(error => {
//   console.log(error.message)
// });
const firebase = new Firebase();

const sendTest = firebase.db.collection('suggestions').get().then(querySnapshot => {
  querySnapshot.forEach((doc)=> {
    console.log(`For ${doc.data().name}, click here: ${doc.data().last}`)
  })
})

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
          <Segment inverted style={{ padding: "10em" }}>
            <Label attached="top right" color="violet">JavaScript</Label>
            {this.state.display === "question" ? <Question onDisplayChange={this.handleDisplayChange} allTopics={this.state.allTopics} getSuggestion={this.getSuggestion} /> : this.state.display === "suggestion" ? <Suggestion testProp="test" allTopics={this.state.allTopics} selectedTopic={this.state.selectedTopic} />
              : <p>Ok, fine then.</p>}
            {this.state.display !== "question" && <Button
              basic
              animated
              inverted
              size="big"
              color="blue"
              // onClick={() => this.handleDisplayChange("question")}
              onClick={sendTest}
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
