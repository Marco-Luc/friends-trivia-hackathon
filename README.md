# Tech Stack

## Frontend

- **React**
- **React Router**
- **SASS**

## Backend

- **Node**
- **Express**

A full-stack Friends (TV Show) Trivia game built in 24 hours for one of BrainStation's hackathon projects.

This was built by Marco Luciano and Alireza Anzali

# Installation

You will need to follow these steps to run Friends (TV Show) - Trivia (locally)

_*Note: You will need node and npm already installed*_

#### Setting up the backend

1. Clone or download the backend server from this repo: [friends-trivia-hackathon-backend-server](https://github.com/Marco-Luc/friends-trivia-hackathon-backend-server)

2. Run `npm install` from inside the backend server directory.

   ```bash
   friends-trivia-hackathon-backend-server
   $ npm install

   ```

3. Create a .env file and add the following to the document:

   ```shell
   PORT=2323

   CLIENT_URL=http://localhost:3000
   ```

4. Start the server:

   ```bash
   $ node index.js
   ```

#### Setting up the frontend

5. Clone or download the frontend server from this repo: [friends-trivia-hackathon](https://github.com/Marco-Luc/friends-trivia-hackathon)

6. Run `npm install` from inside the client directory.

   ```bash
   $ cd friends-trivia-hackathon
   $ npm install

   ```

7. Start the React app:

   ```bash
   $ npm start
   ```
