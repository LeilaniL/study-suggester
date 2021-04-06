# Study Suggester
6/6/20

## Description
As web developers, there's always more to learn, and it can be difficult to choose what to focus on. This tool is meant to fight decision fatigue by selecting a tutorial or project for you to work on today.

## Setup/Installation Instructions
Developers:
- Clone this project
- Set up environment variables: at root level, create `.env` file, replacing with your own keys:
```
REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
```
More info on creating a Firebase account can be found <a href="https://www.learnhowtoprogram.com/react/react-with-nosql/setting-up-a-firebase-project" target="_blank">here.</a>
- In your terminal, navigate to the project folder (i.e. `cd Desktop/study-suggester`)
- Run `yarn install` to install all dependencies
- Run `yarn start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Roadmap
- [x] Return randomly selected link with description
- [ ] Ability to see all items at once
- [ ] Track what was suggested and/or selected to work on last time
- [ ] Filter suggestions by language, media type
- [ ] Form where users can add new items to study/work on
- [ ] Save added topics, remember selected ones in local storage
- [ ] Deploy site
- [ ] Save topics in database
- [ ] Add authentication so users can store/track their own topics

<!-- TODO styling
- indicate title is clickable
- fix alignment of tags
- change favicon
- get images from sites? or have placeholder icons (depending on media type?)
- randomize color of heading as well?
- add more depth to page
- made segment have fixed size
- add header and/or navbar (title, copyright, contact, home) -->


## Tools Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- <a href="https://classic.yarnpkg.com/en/docs/getting-started" target="_blank"> yarn </a>
- <a href="https://react.semantic-ui.com/" target="_blank"> Semantic UI React </a>

----

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) Copyright © 2021 Leilani Leach
