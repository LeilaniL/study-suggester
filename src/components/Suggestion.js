import PropTypes from 'prop-types';
import { Button, Header, Segment } from 'semantic-ui-react';
import React from 'react';

const Suggestion = (props) => {
  const { selectedTopic } = props;
  return (
    <Segment inverted >
      <Button inverted><Header size="huge"><a href={selectedTopic.link} target="_blank" style={{ color: "hotpink" }}>{selectedTopic.name}</a></Header></Button>
      <Header size="medium">{selectedTopic.description}</Header>
    </Segment>
  )
}

Suggestion.propTypes = {
  allTopics: PropTypes.array,
  selectedTopic: PropTypes.object,
  test: PropTypes.string
}
export default Suggestion;

// As a user, I want to be able to get a random topic to study
// As a user, when I get a topic returned, I want a clickable link to that tutorial or GitHub project
// As a user, I want to be able to skip the topic returned and get a different one
// To set a language/tool to focus on before getting a topic returned
