class TopicList {
  constructor(name, description, link, language) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.language = language;
    // this.all.push(this);
  }
}
export const getHardcodedList = () => [topic1, topic2, topic3];
const topic1 = new TopicList("JS Data Structures and Algorithms (Udemy)", "Videos and quizzes on data structures and algorithms implemented in JavaScript", "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/", "JavaScript");

const topic2 = new TopicList("Entity Framework Quiz", "Test your knowledge of the Entity Framework ORM", "https://www.entityframeworktutorial.net/entity-framework-quiz.aspx", "C#");

const topic3 = new TopicList("Watch Technical Mock Interviews | Interview.io", "Watch technical mock interviews with engineers from Google, Amazon, etc.", "https://interviewing.io/recordings", "any")