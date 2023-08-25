# socialmedia-api  <a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>
To build and API for social media web application using Express.js, MongoDB database, Mongoose ODM and Moment.js.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/ecma-262/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat)](https://www.mongodb.com/)
[![Mongoose Badge](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat)](https://mongoosejs.com/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
 

## Description
The Social Network API is a backend application that provides the foundation for a social networking web application. It is built using Express.js for routing, MongoDB as the NoSQL database, and Mongoose as the Object Data Modeling library. This API allows users to share thoughts, react to friends' thoughts, and manage their friend lists.


## Table of contents
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Contribution](#Contribution)
- [Test](#Test) 
- [Questions](#Questions)


## License 
This application is licensed under MIT License
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation:
To install application locally, follow these steps:

* Clone the repository to your local machine.
* Run npm install to install the required dependencies.
* Ensure you have MongoDB installed and running on your machine.
  
## Usage
* Start the server by running npm start.
* Use tools like Insomnia to test the API routes.


## Endpoints
User
* Get all users: GET /api/users
* Create a user: POST /api/users
* Get user by ID: GET /api/users/:id
* Update a user: PUT /api/users/:id
* Delete a user: DELETE /api/users/:id
* Add a friend: PUT /api/users/:userId/friends/:friendId
* Delete a friend: DELETE /api/users/:userId/friends/:friendId

Thought
* Get all thoughts: GET /api/thoughts
* Create a thought: POST /api/thoughts
* Get thought by ID: GET /api/thoughts/:id
* Update a thought: PUT /api/thoughts/:id
* Delete a thought: DELETE /api/thoughts/:id

Reaction
* Add a reaction: PUT /api/thoughts/:id/reactions
* Delete a reaction: DELETE /api/thoughts/:id/reactions


## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
<br>


## Links
* The URL of github repository:  https://github.com/soniasebastian/socialmedia-api
* Link to walkthrough video: https://drive.google.com/file/d/1siXm4otZUhaeli37yV-h6Ak5698xpb6B/view


## Contribution:
   Contributions are most welcome such as bug fixes, feature enhancements, documentation improvements and code optimization.

## Tests: 
     No tests are performed in this project as of now.

## Questions :
  View my [GitHub](https://github.com/soniasebastian) profile
  
  Email me at soniasebastian011@gmail.com for any queries.


