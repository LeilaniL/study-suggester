class TopicList {
  constructor(name, description, link, language) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.language = language;
    // this.all.push(this);
  }
}
export const getHardcodedList = () => [topic1, topic2, topic3, topic4, topic5, topic6, topic7];
const topic1 = new TopicList("JS Data Structures and Algorithms (Udemy)", "Videos and quizzes on data structures and algorithms implemented in JavaScript", "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/", "JavaScript");

const topic2 = new TopicList("Entity Framework Quiz", "Test your knowledge of the Entity Framework ORM", "https://www.entityframeworktutorial.net/entity-framework-quiz.aspx", "C#");

const topic3 = new TopicList("Watch Technical Mock Interviews | Interview.io", "Watch technical mock interviews with engineers from Google, Amazon, etc.", "https://interviewing.io/recordings", "any");

const topic4 = new TopicList("CSS Grid Garden", "Welcome to Grid Garden, where you write CSS code to grow your carrot garden!", "https://cssgridgarden.com/", "CSS");

const topic5 = new TopicList("Flexbox Froggy", "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!", "https://flexboxfroggy.com/", "CSS");

const topic6 = new TopicList("Interview Cake", "A course to prepare for technical interviews", "https://www.interviewcake.com/table-of-contents", "JavaScript");

const topic7 = new TopicList("Redux | FreeCodeCamp: Frontend Libraries", "Short lessons and challenges to learn Redux", "https://www.freecodecamp.org/learn/front-end-libraries/redux/", "JavaScript");