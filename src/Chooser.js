import Topic from './Topic.js';

export default class Chooser {
  constructor() {
    allTopics = [];
    filteredTopics = [...allTopics];
    selectedTopic = null;
  }

  addTopic(newTopic) {
    this.allTopics.push(newTopic);
  }

  getSuggestion() {
    let index = Math.floor(Math.random() * this.filteredTopics.length);
    return this.filteredTopics[index];
  }
}
