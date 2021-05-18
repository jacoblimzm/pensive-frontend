# pensive (front-end)
---
## Details
Pensive is a news-style blogging app where users can create and edit posts that look like professional articles for readers to consume. Posts are sorted according to category with one featured post. A real time chatroom is available for online users to engage in discussion about posts. Pensive is built using React for the front-end and django(python) for the back-end.

This repository hosts the front-end.
[Link to back-end](https://github.com/jacoblimzm/pensive-backend)

*Project Document at the bottom*


## General Approach
1. Project document set up to determine:
   - User Stories
   - Wireframes
   - Models
   - General structure and naming conventions
2.  Back-end work started first to ensure that proper CRUD functionality is set up and working. Backend tested with [Postman](https://www.postman.com/). 
3.  Front-end work begun with function back-end. Pages serving HTTP requests built first.
4.  Real time chat functionality based on websockets built last.

## Technologies Used
- **P:** PostgreSQL is an open-source relational database, and is one of the most popular alternatives to mySQL. Unlike MongoDB which stores data in JSON objects, data in a SQL database is stored in tables, and each data entry is a row in the table. SQL databases are great for establishing relationships between data, however, requires a schema and therefore is less flexible compared to noSQL databases.
- **D:** Django is a python framework that simplifies the process of building a backend. Django comes with 'batteries-included', meaning it is opinionated and comes with built in tools for common functionality(i.e admin, ORM, database connection). This helps to speed up development by making well-tested functions available and letting the developer focus on other app-specific functionality.
- **R:** React.js is a popular JavaScript based frontend framework that helps to simplify the building of websites by breaking down the logic and functionality into smaller components. This makes projects more reusable, modular, and dynamic. 
- **Redis:** Redis is an in-memory data storage that is typically used as a database and cache. It's speed is suiltable for real-time applications like chat.

## Installation
1. Fork the project into your personal GitHub repo
2. Install all packages:
```
$ npm install
```

## Getting Started
There are currently two environment variables which point to the back-end hosted on heroku, so feel free to define your own .env file with your local server as the path.

Run the project
```
$ npm start
```



## Dependencies
React:
- axios
- dotenv
- react-router
- react-router-dom
- websocket
---
[Project Document](https://docs.google.com/document/d/1uHbCfDDgo5v9DKCopHPoxmvlLbPzsDYwioVBvozA1cM/edit)
