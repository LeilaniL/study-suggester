import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Header, Icon, Radio, Segment } from 'semantic-ui-react';

const CreateSuggestion = (props) => {
  return (
    <Segment inverted>
      <Header icon inverted color="blue" size="huge" textAlign="center">
        <Icon name="plus circle" color="blue" circular />
        <Header.Content>Add a new topic</Header.Content>
      </Header>
      <Form inverted size="large">
        <Form.Input label="name" placeholder="Name of tutorial/resource" required></Form.Input>
        <Form.Input label="link" placeholder="http://www.learnhowtoprogram.com"></Form.Input>
        {/* <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field> */}
        <Form.Field>
          <Radio
            label="JavaScript"
            name="radioGroup"
            value="JavaScript"
            checked
          // checked={this.state.value === 'this'}
          // onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="C#"
            name="radioGroup"
            value="C#"
          // checked={this.state.value === 'this'}
          // onChange={this.handleChange}
          />
        </Form.Field>
        <Button
          basic
          animated
          inverted
          size="big"
          color="blue"
          onClick={() => console.log("yay form submitted")}
        >
          <Button.Content visible>Add Topic</Button.Content>
          <Button.Content hidden>
            <Icon name="send" />
          </Button.Content>
        </Button>      </Form>
    </Segment >
  )
}

// CreateSuggestion.PropTypes = {

// }

export default CreateSuggestion;