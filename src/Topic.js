export default class Topic {
  constructor(name, description, link, language) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.language = language;
  }
}

// As a user, I want to be able to get a random topic to study
// As a user, when I get a topic returned, I want a clickable link to that tutorial or GitHub project
// As a user, I want to be able to skip the topic returned and get a different one
// To set a language/tool to focus on before getting a topic returned
