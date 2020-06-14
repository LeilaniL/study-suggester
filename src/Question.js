import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
//TODO: Fix 'findDOMnode' console warning from using Button component
import './App.css';
import Suggestion from './Suggestion';


const Question = (props) => {

  return (
    <Segment inverted>
      <Header as="h1" icon inverted color="teal" textAlign="center">
        <Icon name="question circle" color="teal" circular />
        <Header.Content>I'm not sure what to study today</Header.Content>
      </Header>
      <p>Would you like a suggestion?</p>
      <Button
        basic
        animated
        inverted
        size="big"
        color="green"
        onClick={props.getSuggestion}
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
        color="red"
        onClick={() => props.onDisplayChange("nope")}
      >
        <Button.Content visible>No</Button.Content>
        <Button.Content hidden>
          <Icon name="ban" />
        </Button.Content>
      </Button>
    </Segment>
  )
}

Question.propTypes = {
  allTopics: PropTypes.array,
  onDisplayChange: PropTypes.func,
  getSuggestion: PropTypes.func
}

export default Question;
