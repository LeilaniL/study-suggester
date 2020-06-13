import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
//TODO: Fix 'findDOMnode' console warning from using Button component
import './App.css';


const Question = (props) => {
  const getSuggestion = () => {
    let index = Math.floor(Math.random() * props.allTopics.length);
    console.log(props.allTopics[index]);
    props.onDisplayChange("suggestion")
    // this.setState({ display: 'suggestion' });
  };
  return (
    <div className="App">
      <div className="App-header">
        <Header as="h1" icon inverted color="teal" textAlign="center">
          <Icon name="question circle" color="teal" circular />
          <Header.Content>I'm not sure what to study today</Header.Content>
        </Header>{' '}
        <p>Would you like a suggestion?</p>
        <Segment inverted>
          <Button
            basic
            animated
            inverted
            size="big"
            floated="right"
            color="green"
            onClick={getSuggestion}
          >
            <Button.Content visible>Yes!</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <Button
            basic
            animated
            inverted
            size="big"
            floated="left"
            color="red"
            onClick={() => props.onDisplayChange("nope")}
          >
            <Button.Content visible>No</Button.Content>
            <Button.Content hidden>
              <Icon name="ban" />
            </Button.Content>
          </Button>
        </Segment>
      </div>
      {/* <div className="hidden" id="results">
        <p>Results!</p>
      </div>
      {this.state.display === 'nope' && (
        <div>
          <p>Ok, fine. Do whatever you want.</p>
        </div>
      )} */}
    </div >
  );
}

Question.propTypes = {
  onDisplayChange: PropTypes.func,
  allTopics: PropTypes.array
}

export default Question;
